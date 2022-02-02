import React, {useState} from 'react';
import {
  View,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  COLORS,
  constants,
  dummyData,
  icons,
  images,
  SIZES,
} from '../../constants';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import CategoryRenderItem from './categoryRenderItem';
import FoodMennuRenderItem from './FoodMenuRenderItem';
import FooterFoodMenu from './FooterRenderItem';
import styles from './styles';
import {HeaderComponents} from '../../common';

interface HomeScreen {
  navigation: any;
}

const HomeScreen = (props: HomeScreen) => {
  const {navigation} = props;
  const [filter, setFilter] = useState(false);
  return (
    <View style={{flex: 1}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={filter}
        style={{backgroundColor: COLORS.transparentBlack7}}>
        <View style={styles.modalContainer}>
          <TouchableWithoutFeedback onPress={() => setFilter(false)}>
            <View style={styles.UpperModal}></View>
          </TouchableWithoutFeedback>
          <ScrollView
            style={styles.modalView}
            showsVerticalScrollIndicator={false}>
            <View style={styles.modalTextContainer}>
              <Text style={styles.FilterText}>{constants.keywords.Filter}</Text>
              <TouchableOpacity
                style={styles.crossButton}
                onPress={() => setFilter(false)}>
                <Image source={icons.cross} style={styles.crossIcon} />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.distanceText}>
                {constants.keywords.Distance}
              </Text>
              <MultiSlider
                values={[3, 10]}
                min={1}
                max={20}
                step={1}
                sliderLength={SIZES.width - SIZES.padding * 2}
                markerOffsetY={20}
                selectedStyle={{backgroundColor: COLORS.primary}}
                trackStyle={{
                  height: 10,
                  borderRadius: 10,
                  backgroundColor: COLORS.lightGray2,
                }}
                minMarkerOverlapDistance={50}
                customMarker={e => {
                  return (
                    <View style={styles.MarkerContainer}>
                      <View style={styles.MarkerCircle}></View>
                      <Text style={styles.MarkerText}>{e.currentValue}Km</Text>
                    </View>
                  );
                }}></MultiSlider>
              <Text style={styles.distanceText}>
                {constants.keywords.Delivery_Time}
              </Text>
              <View>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={constants.delivery_time}
                  extraData={constants.delivery_time}
                  keyExtractor={(_, index) => index.toString()}
                  renderItem={({item, index}) => {
                    return (
                      <TouchableOpacity style={styles.deliverytimeText}>
                        <Text style={styles.labelText}>{item.label}</Text>
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
              <Text style={styles.distanceText}>
                {constants.keywords.Pricing_Range}
              </Text>
              <MultiSlider
                values={[10, 50]}
                min={1}
                max={100}
                step={1}
                sliderLength={SIZES.width - SIZES.padding * 2}
                markerOffsetY={20}
                selectedStyle={{backgroundColor: COLORS.primary}}
                trackStyle={{
                  height: 10,
                  borderRadius: 10,
                  backgroundColor: COLORS.lightGray2,
                }}
                minMarkerOverlapDistance={50}
                customMarker={e => {
                  return (
                    <View style={styles.MarkerContainer}>
                      <View style={styles.MarkerCircle}></View>
                      <Text style={styles.MarkerText}>
                        {'$'}
                        {e.currentValue}
                      </Text>
                    </View>
                  );
                }}></MultiSlider>
              <Text style={styles.distanceText}>
                {constants.keywords.Ratings}
              </Text>
              <View>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={constants.ratings}
                  extraData={constants.ratings}
                  keyExtractor={(_, index) => index.toString()}
                  renderItem={({item, index}) => {
                    return (
                      <TouchableOpacity style={styles.ratingContainer}>
                        <Text style={styles.labelText}>{item.label}</Text>
                        <Image source={icons.star} style={styles.starIcon} />
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
              <Text style={styles.distanceText}>{constants.keywords.Tags}</Text>
              <View>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={constants.tags}
                  extraData={constants.tags}
                  keyExtractor={(_, index) => index.toString()}
                  renderItem={({item, index}) => {
                    return (
                      <TouchableOpacity style={styles.ratingContainer}>
                        <Text style={styles.labelText}>{item.label}</Text>
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
              <TouchableOpacity style={styles.NextButtonContainer}>
                <Text style={styles.NextButtonText}>
                  {constants.keywords.Apply_Filters}
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </Modal>
      <View style={styles.colorcontainer}>
        <HeaderComponents />
        <View style={styles.Container}>
          <View style={styles.searchContainer}>
            <Image source={icons.search} style={styles.searchIcons} />
            <TextInput
              style={styles.searchInput}
              placeholder="search food..."
            />
            <TouchableOpacity onPress={() => setFilter(true)}>
              <Image source={icons.filter} style={styles.searchIcons} />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView style={{}} showsVerticalScrollIndicator={false}>
          <View style={styles.deliveryContainer}>
            <Text style={styles.deliveryText}>
              {constants.keywords.Delivery_To}
            </Text>

            <TouchableOpacity style={styles.addressConatiner}>
              <Text style={styles.addressText}>
                {constants.keywords.Address}
              </Text>
              <Image source={icons.down_arrow} style={styles.downarrow} />
            </TouchableOpacity>
          </View>

          <View style={{marginLeft: 20}}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={dummyData.categories}
              extraData={dummyData.categories}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({item, index}) => <CategoryRenderItem item={item} />}
            />

            <View style={styles.textContainer}>
              <Text style={styles.addressText}>
                {constants.keywords.Popular}
              </Text>
              <Text style={styles.deliveryText}>
                {constants.keywords.Show_All}
              </Text>
            </View>

            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={dummyData.menu}
              extraData={dummyData.menu}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({item, index}) => (
                <FoodMennuRenderItem item={item} />
              )}
            />

            <View style={styles.textContainer}>
              <Text style={styles.addressText}>
                {constants.keywords.Recommended}
              </Text>
              <Text style={styles.deliveryText}>
                {constants.keywords.Show_All}
              </Text>
            </View>

            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={dummyData.menu}
              extraData={dummyData.menu}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({item, index}) => <FooterFoodMenu item={item} />}
              ListFooterComponent={<View style={{height: 175}} />}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;
