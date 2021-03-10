# Mini-Supermarket-Chatbot-Simulation

https://www.notion.so/Project-Description-b457cf8320754c78870f98055850392c
########################
##Project Description##
########################

MakMak has hired you as the developer of a mini supermarket chatbot simulation. 

# Part1: 3andak gowa?

- MakMak has a list of items that he sells and their unit price.
    - Each item has an ID, name, price and quantity
- MakMak keeps track of the stock of each item he sells.
- Makmak keeps track of items that he needs to restock.
- Every morning MakMak runs the restock function to check what items need to be restocked today.

    ```bash
    How can I help you? 
    > restock
    The following items need be restocked! 
    ID  | Item Name
    123 | Flour 
    045 | Milk 
    ```

- When a client asks MakMak about the price of an item, he returns their unit price

    ```bash
    How can I help you? 
    > price Sugar
    The unit price for Sugar is 5 EGP
    ```

- When a client asks MakMak about an item, he can search if he has enough stock from it or not.

    ```bash
    How can I help you? 
    > search Sugar 2
    Yes we have 2 Sugar Units available

    How can I help you? 
    > search Milk 3
    Sorry, we are out of milk.  

    How can I help you? 
    > search Juice 7
    We only have 3 Juice Units available.  
    ```

# Part2: Momken 2a3mel Order men fadlak?

- MakMak receives orders from customers, he needs to check stock availability of each item. and calculate the total and display it

    ```bash
    How can I help you? 
    > order Sugar 2
    2 units of Sugar available and added to your order.  

    How can I help you?
    > order Juice 3
    3 units of Juice available and added to your order.  

    How can I help you?
    > order Milk 3
    Sorry, we are out of milk, could not add it to your order. 

    How can I help you?
    > order Bread 4
    4 units of bread available and added to your order.  

    How can I help you?
    > order DONE
    Here is your order:
    Order Date: Thu Apr 09 2020 15:28:28
    Qt | Item
    -----------
    2  | Sugar
    3  | Juice 
    4  | Bread 
    Total : 50 EGP
    ```

# Part3: Howa e7na eeh el nezam today?

- MakMak can get total sales

    ```bash
    How can I help you?
    > Sales 
    Total Sales is 500 EGP
    ```

- MakMak wants to know which is the most selling product (sold most items), and how much he sold from it and the product that got most sales (the money from selling it was more than any other item)

    ```bash
    How can I help you?
    > Most Selling 
    The most selling item is Bread, we sold 20 units for 100 EGP

    How can I help you?
    > Most Sales
    The most sales came from Shampoo, we sold 5 units for 200 EGP
    ```

# Assumptions:

- Solve the project part by part so you are not overwhelmed.
- The results for output depends on the data you define in your program, the examples here are just for illustration and to show you different cases you can handle.  You don't have to have the exact same values defined, but make sure you handle the cases illustrated.
- You will need to have some predefined values stored for items to have data to test on. Remember everytime you run the program, all data you entered new to the program is lost. So only predefine values for variables is stored.
- Global variables should be used to store predefined values
- Use readline to take input from user.
- Once run, Your program is in a continuous state of waiting for input, unless makmak types exit, this ends the program.
- There is more than one way to design the project, objects and functions. Be creative and follow your own trail of thought.
- Hint: Check the **split** method in Strings ([https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split))