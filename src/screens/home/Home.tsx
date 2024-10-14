import { StyleSheet } from 'react-native';
import React from 'react';
import { Box, HStack, ScrollView, Text, VStack } from '@gluestack-ui/themed';
import SlideImage from './component/SlideImage';
import { basic, EDataType } from '../../db/slide-data';
import CardItem from './component/CardItem';
import { StatusBar } from 'expo-status-bar';

type Props = {};

const Home = (props: Props) => {
  const data = basic;
  return (
    <ScrollView flex={1} bg='$white' showsVerticalScrollIndicator={false}>
      <StatusBar style='light' backgroundColor='green' />
      <VStack flex={1} px={'$4'} gap={'$4'} bg='$white'>
        <HStack justifyContent='space-between'>
          <Text
            display='none'
            fontWeight='$normal'
            fontSize={'$sm'}
            color='$textDark500'
          >
            Xem tất cả
          </Text>
        </HStack>
        <HStack flexWrap='wrap' justifyContent='space-between'>
          {Object.values(data).map((item) => (
            <Box key={item.id} mb={'$6'}>
              <CardItem item={item} type={EDataType.BASIC} />
            </Box>
          ))}
        </HStack>
      </VStack>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
