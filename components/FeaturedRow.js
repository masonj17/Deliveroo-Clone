import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Restaurant Cards */}
        <RestaurantCard id={1} title="Nandos" rating={4.5} genre="Peri-Peri" address="123 Main St" short_description="Try our juicy peri-peri chicken meals!" dishes={[]} long={20} lat={0} />
        <RestaurantCard id={2} title="Pizza Hut" rating={4} genre="Pizza" address="123 Main St" short_description="Try our juicy pizza!" dishes={[]} long={20} lat={0} />
        <RestaurantCard id={3} title="KFC" rating={4.7} genre="Chicken" address="123 Main St" short_description="It's finger lickin good!" dishes={[]} long={20} lat={0} />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
