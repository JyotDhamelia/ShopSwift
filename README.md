# ShopSwift
## Admin Panel
![Annotation 2024-10-12 120528](https://github.com/user-attachments/assets/c22e8ac8-7b1d-4dab-8ee1-b5360c88a7fb)

# Live Demo
- https://shop-swiftweb.vercel.app / https://shop-swift-one.vercel.app   

# Overview
- ShopSwift is an Ecommerce website for selling things online which people uses in their everyday life. it is an admin panel which will help ShopSwift's Admins to manage all it's operations perfectly.
- ShopSwift includes many modules such as manage products (Add & Edit), manage categories (Add & Edit), view customers, view orders, change password etc.  

# Features
- Login: ShopSwift Uses an API to login into the Admin portal. because it is an admin panel there is no register (sign up) option available.

  ![Annotation 2024-10-12 131306](https://github.com/user-attachments/assets/2f73afbd-5dde-45d2-9065-9d4c0b8a566e)

- Home: Home page is the first page you see after login it displays total products, total categories, total customers and total orders available on the platform.

  ![Annotation 2024-10-12 120528](https://github.com/user-attachments/assets/c22e8ac8-7b1d-4dab-8ee1-b5360c88a7fb)
  
- Categories: this is a separate module which displays all the Categories available on the platform along with it's Id, Name, Photo and Status. also has two links of edit and delete for ease of admin.

  ![Annotation 2024-10-12 130946](https://github.com/user-attachments/assets/9caa331c-8e55-4fbe-9984-cd4724d1fb59)
  
- Add Category: this is a feature inside Categories module which helps admin to add new Category onto the platform requires Category Title, Photo and Status. after clicking on save new category will be added.

  ![Annotation 2024-10-12 132037](https://github.com/user-attachments/assets/352b658d-d59c-4f8a-bf38-25ccc82b2f03)

- Products: this is a separate module which displays all the Products available on the platform along with it's Id,it's corresponding Category, Name, Photo, Price and Stock. also has two links of edit and delete for ease of admin.

  ![Annotation 2024-10-12 132135](https://github.com/user-attachments/assets/20fa9e5d-4ad8-4df5-a2eb-88f9db729919)

- Add Products: this is a feature inside Products module which helps admin to add new Product onto the platform requires Product Title, Photo, Price, Stock, selecting corresponding Category and Description of that product. after clicking on save new product will be added.

  ![Annotation 2024-10-12 130904](https://github.com/user-attachments/assets/ee0a3f0c-ff1e-4679-aa4d-592e264c4c18)

- Customers: this is a page that displays all the Customers available on the platform along with their details such as Id, Email, Mobile No also has view link which will display single perticular user's details.

  ![Annotation 2024-10-12 131006](https://github.com/user-attachments/assets/8ce2b8d8-c787-494d-9b0a-0a06e7f151eb)

- Orders: this is a page that displays all the Orders placed by users along with details such as Id, Customer Details, Date, Ammount and Status also has view link which will display that order's details.

  ![Annotation 2024-10-12 131022](https://github.com/user-attachments/assets/8f39d293-554f-4fc5-94ba-b70457a13f2f)

- Change Password: this page is to help admins to change their own password (this will not change password in real in API. it will fake it like password is changed because of the security reasons for API).

  ![Annotation 2024-10-12 131042](https://github.com/user-attachments/assets/dffd6206-a02d-4a34-a511-f25473820aa3)
  
- Forgot Password: this page is to help admins to recover their account password (this will not change password in real in API. it will fake it like password is changed because of the security reasons for API).

  ![Annotation 2024-10-12 132348](https://github.com/user-attachments/assets/431311f9-5900-4f40-857a-606dc207d009)

- Logout: this button is to help admin to logout from the website so that unauthorized persons can not use admin panel. 

Note: this is an admin pannel so it won't be available for all users to login and see what is running inside so the username and password is not provided.

# Get Started
- To get satrted with ShopSwift follow this steps:
 1. Clone the Repository: `https://github.com/JyotDhamelia/ShopSwift.git`
 2. Navigate to the project directory: `cd shopswift`
 3. Navigate to Admin: `cd admin`
 4. Install Dependencies: `npm install`
 5. Run the website: `npm start`
 6. Open the website in a browser: `http://localhost:3000`

# License
- This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
