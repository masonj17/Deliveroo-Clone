import { View, Text, Touchable, TouchableOpacity, Image } from "react-native";
import React from "react";
import categoryImage from "../assets/bike.jpg";
import sushi from "../assets/sushi.jpg";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="realtive mr-2">
      <Image source={sushi} className="h-20 w-20 rounded" />
      <Text className="absolute bottom-1 left-1 text-white font-bold">{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
