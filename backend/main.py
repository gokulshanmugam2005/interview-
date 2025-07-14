from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import sessionmaker, declarative_base

app = FastAPI()

# ✅ CORS middleware to allow React frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace "*" with frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Database setup
SQLALCHEMY_DATABASE_URL = "mysql+pymysql://root:Gokulsha2005@localhost/companydb"

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(bind=engine)
Base = declarative_base()

# ✅ Company model
class Company(Base):
    __tablename__ = "company"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), nullable=False)
    location = Column(String(255), nullable=False)

Base.metadata.create_all(bind=engine)

# ✅ Pydantic schema
class CompanyCreate(BaseModel):
    name: str
    location: str

# ✅ Root endpoint
@app.get("/")
def read_root():
    return {"message": "Welcome to the Company API"}

# ✅ POST endpoint to create a company
@app.post("/companies/")
def create_company(company: CompanyCreate):
    db = SessionLocal()
    db_company = Company(name=company.name, location=company.location)
    db.add(db_company)
    db.commit()
    db.refresh(db_company)
    db.close()
    return {
        "message": "Company data stored successfully",
        "data": {
            "id": db_company.id,
            "name": db_company.name,
            "location": db_company.location
        }
    }

# ✅ GET endpoint to retrieve all companies
@app.get("/companies/")
def read_companies():
    db = SessionLocal()
    companies = db.query(Company).all()
    db.close()
    # Return as JSON list
    return [
        {
            "id": c.id,
            "name": c.name,
            "location": c.location
        } for c in companies
    ]
