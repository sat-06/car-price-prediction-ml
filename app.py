import streamlit as st

st.set_page_config(
    page_title="Car Price Predictor",
    page_icon="🚗",
    layout="wide"
)

st.title("🚗 Car Price Prediction System")
st.markdown("### Enter Car Details Below")

# Layout Columns
col1, col2 = st.columns(2)

with col1:
    year = st.number_input("Year of Purchase", min_value=1990, max_value=2025)
    present_price = st.number_input("Present Price (in Lakhs)")
    kms_driven = st.number_input("Kilometers Driven")

with col2:
    fuel_type = st.selectbox("Fuel Type", ["Petrol", "Diesel", "CNG"])
    seller_type = st.selectbox("Seller Type", ["Dealer", "Individual"])
    transmission = st.selectbox("Transmission", ["Manual", "Automatic"])
    owner = st.selectbox("Number of Previous Owners", [0,1,2,3])

st.button("Predict Price")