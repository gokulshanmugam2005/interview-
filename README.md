# AIVIO Interview Project

This repository contains the **AIVIO Interview backend project** developed using **FastAPI**, **SQLAlchemy**, and **MySQL**. It demonstrates CRUD operations for a `company` table with RESTful API endpoints.

---

## 🚀 **Features**

- FastAPI backend with:
  - CORS enabled for frontend integration
  - MySQL database connection via SQLAlchemy
  - Create and read company data endpoints

---

## 🛠️ **Tech Stack**

- **Python**
- **FastAPI**
- **SQLAlchemy**
- **MySQL**

---

## 📂 **Project Structure**

AIVIO INTERVIEW/
├── backend/
│ ├── main.py
│ ├── requirements.txt
│ └── ... (other backend files)
├── README.md

yaml
Copy
Edit

---

## ⚙️ **Setup Instructions**

### 🔹 **1. Clone the repository**

```bash
git clone https://github.com/yourusername/aivio-interview.git
cd aivio-interview/backend
🔹 2. Create virtual environment
bash
Copy
Edit
python -m venv venv
Activate it:

On Windows:

bash
Copy
Edit
venv\Scripts\activate
On Mac/Linux:

bash
Copy
Edit
source venv/bin/activate
🔹 3. Install dependencies
bash
Copy
Edit
pip install -r requirements.txt
🔹 4. Configure database
Ensure MySQL server is running and a database named companydb is created.

Update database URL in main.py if needed:

python
Copy
Edit
SQLALCHEMY_DATABASE_URL = "mysql+pymysql://root:yourpassword@localhost/companydb"
🔹 5. Run FastAPI server
bash
Copy
Edit
uvicorn main:app --reload --host 0.0.0.0 --port 8000
Open your browser at http://localhost:8000 or test APIs at:

http://localhost:8000/docs (Swagger UI)

📬 API Endpoints
Method	Endpoint	Description
GET	/	Root welcome route
POST	/companies/	Create a company
GET	/companies/	Retrieve all companies

👤 Author
Name: Gokul Shanmugam

Email: gokulshanmigam2005@gmail.com

