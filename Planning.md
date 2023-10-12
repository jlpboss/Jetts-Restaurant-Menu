# Components for the project 

## Top Nav Bar
### Logo Img
### 3 Headder Texts (Home, Menu, Contact info)

## Catagory selection Bar
### 5 checkbox buttons (Breakfast, Lunch, Dinner, Appetizer, Drink)

## Food Item Cards 
### largest Text for the name of the meal
### Large Text that has the type of Cuisine
### Small Text that has the item description


# Functionalaty for the site

## Top nav bar
### no functional componetes they all just are there to look like a full websight

## Catagory selection Bar
### each of the checkmark buttons change the cards that will display in the arey below
### in order to know what buttons are currnetly selected i will make an array that has the name of eatch catoaory saved and when its unckecked i remove it

## Food Item Cards 
### useing the array of selected values from the Catagory selection Bar i will look though the array of objects returned by the menu api and see if there catogory is one of the ones in the array of checked boxes
### once i have found an menue item i want to display im going to feed in the ogject as a prop that will go into a thing makeing cards in a container
