import {
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Platform,
} from "react-native";
import { Image, Box, VStack, Text, HStack } from "@gluestack-ui/themed";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BottomTabsParams, RootStackParams } from "../../navigations/config";

const PracticeCard = () => {
  return (
    <HStack
      alignItems="center"
      m="$1"
      gap={"$2"}
      p="$1"
      // shadowOpacity={0.1}
      // shadowOffset={{ width: 0.2, height: 0.2 }}
      borderWidth={2}
      borderRadius={12}
      borderColor="$coolGray200"
    >
      <Box borderColor="$coolGray100" rounded={"$2xl"}>
        <Image
          borderRadius={12}
          w={"$40"}
          h={"$32"}
          alt="img-practice"
          source={require("../../assets/env/story1.png")}
        />
      </Box>
      <VStack gap="$1" flex={1}>
        <Text fontWeight="$semibold" fontSize={"$sm"} color="$coolGray800">
          Bài 1: Ô tô chạy
        </Text>
        <Text
          fontWeight="$normal"
          fontSize={"$xs"}
          color="$coolGray500"
          numberOfLines={1}
        >
          Viết chương trình mô tả chiếc ô tô chuyển động trên màn hình
        </Text>
      </VStack>
    </HStack>
  );
};

type Props = {} & NativeStackScreenProps<
  RootStackParams & BottomTabsParams,
  "Practice"
>;

const Practice = ({ navigation }: Props) => {
  const onPracticeDetail = () => {
    navigation.navigate("PracticeDetail");
  };
  return (
    <VStack
      flex={1}
      gap={"$12"}
      p={"$4"}
      justifyContent="space-between"
      bg="$white"
    >
      {Platform.OS == "android" && <StatusBar barStyle="light-content" />}
      <HStack flexWrap="wrap">
        <Box w="$full" mb={"$4"}>
          <TouchableOpacity onPress={onPracticeDetail}>
            <PracticeCard />
          </TouchableOpacity>
        </Box>
      </HStack>
    </VStack>
  );
};
export default Practice;

const styles = StyleSheet.create({});
