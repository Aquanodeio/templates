import streamlit as st

st.title("Basic Calculator")

# Input numbers
num1 = st.number_input("Enter first number:", value=0.0)
num2 = st.number_input("Enter second number:", value=0.0)

# Operation selection
operation = st.selectbox(
    "Select operation:",
    ("Addition", "Subtraction", "Multiplication", "Division")
)

# Calculate result
result = 0
if st.button("Calculate"):
    if operation == "Addition":
        result = num1 + num2
    elif operation == "Subtraction":
        result = num1 - num2
    elif operation == "Multiplication":
        result = num1 * num2
    elif operation == "Division":
        if num2 != 0:
            result = num1 / num2
        else:
            st.error("Cannot divide by zero!")
            st.stop()
    
    st.success(f"Result: {result}")
