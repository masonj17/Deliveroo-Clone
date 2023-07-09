import { View, Text, Image, TextInput, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import logo from "../assets/deliveroo.jpg";
import { AdjustmentsVerticalIcon, ChevronDownIcon, UserIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      <View className="text-red-500">
        {/* Header */}
        <View className="flex-row items-center mx-4 space-x-2">
          <Image source={logo} className="h-12 w-12 bg-gray-400 p-4 rounded-full " />

          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>

          <UserIcon size={35} color="#00CCBB" />
        </View>

        {/* Search */}
        <View className="flex-row items-center space-x-2 pb-2 mx-4">
          <View className="flex-row flex-1 space-x-2 bg-gray-100 p-1 my-1">
            <MagnifyingGlassIcon size={20} color="gray" />
            <TextInput placeholder="Restaurants and cuisines" keyboardType="default" placeholderTextColor={"#D3D3D3"} />
          </View>
          <AdjustmentsVerticalIcon color="#00CCBB" />
        </View>

        {/* Body */}
        <ScrollView>
          {/* Catgeories component */}
          <Categories />

          {/* Featured Rows */}
          <FeaturedRow id="1" title="Featured" description="Paid placements from our partners" />
          <FeaturedRow id="2" title="Tasty Discounts" description="Everyones been enjoying these juicy discounts" />
          <FeaturedRow id="3" title="Offers near you!" description="Why not support your local restaurant tonight!" />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
