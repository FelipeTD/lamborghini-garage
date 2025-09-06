import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 8,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  imageLogo: {
    flex: 1,
    height: '65%',
    resizeMode: 'contain',
  },
  carBrand: {
    color: '#FFF',
    fontWeight: '400',
    fontSize: 18,
    fontStyle: 'italic',
  },
  carName: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  priceLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 10,
    paddingBottom: 10,
  },
  priceLabel: {
    color: '#FFF',
    fontSize: 22,
  }
});