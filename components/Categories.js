import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* Categories Card*/}
      <CategoryCard title="Testing 1" />
      <CategoryCard title="Testing 2" />
      <CategoryCard title="Testing 3" />
      <CategoryCard title="Testing 4" />
      <CategoryCard title="Testing 5" />
      <CategoryCard title="Testing 6" />
    </ScrollView>
  );
};

export default Categories;
