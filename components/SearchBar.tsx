import { icons } from '@/constants/icons';
import React from 'react';
import { Image, TextInput, View } from 'react-native';

interface Props {
    placeholder: string;
    onPress?: () => void;
}

const SearchBar = ({ placeholder, onPress }: Props) => {
    return (
        <View className='flex-row gap-2 items-center rounded-full px-4 py-2 bg-dark-200'>
            <Image source={icons.search} className='size-5' resizeMode='contain' tintColor="#ab8bff" />
            <TextInput
                onPress={onPress}
                placeholder={placeholder}
                value=''
                onChangeText={() => { }}
                placeholderTextColor="#ab8bff"
                className='flex-1  text-white'
            />
        </View>
    )
}

export default SearchBar