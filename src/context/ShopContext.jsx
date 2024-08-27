import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// Create a new context for the shop
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    // Currency symbol used throughout the application
    const currency = 'Rs';
    // Fixed delivery fee for all orders
    const delivery_fee = 500;

    // State for search term input
    const [search, setSearch] = useState('');
    // State to control the visibility of the search bar
    const [showSearch, setShowSearch] = useState(false);
    // State for cart items, where keys are item IDs and values are size-specific quantities
    const [cartItems, setCartItems] = useState({});
const navigate = useNavigate();

    // Function to add an item to the cart with specified size
    const addToCart = async (itemId, size) => {
        if (!size) {
            toast.error('Select Product Size'); // Show error if size is not selected
            return;
        }

        let cartData = { ...cartItems };

        // Check if item already exists in cart
        if (cartData[itemId]) {
            // If item size exists, increment quantity
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                // If item size does not exist, initialize quantity
                cartData[itemId][size] = 1;
            }
        } else {
            // If item does not exist in cart, add it with size and quantity
            cartData[itemId] = { [size]: 1 };
        }

        setCartItems(cartData); // Update the cart state with new data
    };

    // Function to calculate total number of items in the cart
    const getCartCount = () => {
        let totalCount = 0;
        for (const itemId in cartItems) {
            for (const size in cartItems[itemId]) {
                if (cartItems[itemId][size] > 0) {
                    totalCount += cartItems[itemId][size]; // Sum up quantities
                }
            }
        }
        return totalCount; // Return the total count of items in the cart
    };

    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;

        setCartItems(cartData);

    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items);
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalAmount += itemInfo.price * cartItems[items][item];
                    }
                } catch (error) {

                }


            }
        }
        return totalAmount;
    }

    // Value object to be provided to the context consumers
    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount,
        navigate,
    };

    // Provide the context value to the component tree
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
