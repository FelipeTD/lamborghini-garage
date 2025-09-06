import React, { useEffect, useState } from "react";
import { View, Text, Button, Image } from "react-native";
import { styles } from "./style";
import logo from '../../../assets/logo.png';
import Divider from "../Divider";
import { CAR_ASSETS_BASE_URL } from "../../constants/car";
import BuyButton from "../BuyButton";
import { CarModel } from "./props";
import { handleNextItem, handlePreviousItem, loadCarData } from "./actions";

export default function CardView() {

    const [carData, setCarData] = useState<CarModel | null>(null);

    useEffect(() => {
        (async () => {
            await loadCarData(3, setCarData);
        })();
    }, []);

    const renderLogoBox = () => (
        <View style={styles.logoContainer}>
            <Image source={logo} style={styles.imageLogo} />
        </View>
    );

    const renderDetails = () => (
        <View style={{ alignItems: 'center' }}>
            <Text style={styles.carBrand}>Lamborghini</Text>
            <Text style={styles.carName}>{carData?.carName}</Text>
        </View>
    );

    const renderCarImage = () => (
        <Image source={{ uri: `${CAR_ASSETS_BASE_URL}${carData?.id}.png` }} style={styles.image} />  
    );

    const renderPriceControls = () => (
        <View style={styles.priceLabelContainer}>
            <Button title="<" color={"#01A6B3"} onPress={() => handlePreviousItem(carData, setCarData)} />
            <Text style={styles.priceLabel}>{carData?.price}</Text>
            <Button title=">" color={"#01A6B3"} onPress={() => handleNextItem(carData, setCarData)} />
        </View>
    );

    return (
        <View style={styles.imageContainer}>
            {renderLogoBox()}
            <Divider />
            {renderDetails()}
            {renderCarImage()}
            <Divider />
            <BuyButton />
            {renderPriceControls()}
        </View>
    );
}