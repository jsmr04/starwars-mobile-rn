import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Paragraph} from 'react-native-paper';
import { Loader } from '~components/atoms';
import {CountIndicator, Slider} from '~components/molecules';
import { SliderData } from "~components/molecules/Slider";

export interface InformationData {
  title: string
  subtitle: string
  firstIndicatorIcon: string
  firstIndicatorText: string
  firstIndicatorValue: string
  secondIndicatorIcon: string
  secondIndicatorText: string
  secondIndicatorValue: string
  thirdIndicatorIcon: string
  thirdIndicatorText: string
  thirdIndicatorValue: string
  description? : string
}

interface Props {
  onSliderItemPress: (id: string) => void;
  sliderData: SliderData[];
  data: InformationData;
  loading: boolean;
}

const Information: React.FC<Props> = props => {
  const {onSliderItemPress, sliderData, data, loading} = props;

  if (loading) return <Loader/>

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Card style={{margin: 5}}>
          <Card.Title
            titleStyle={{fontSize: 25}}
            subtitleStyle={{fontSize: 17}}
            title={data.title}
            subtitle={data.subtitle}
          />
        </Card>
      </View>
      <View style={styles.iconContainer}>
        <CountIndicator
          iconName={data.firstIndicatorIcon}
          text={data.firstIndicatorText}
          value={data.firstIndicatorValue}
        />
        <CountIndicator
          iconName={data.secondIndicatorIcon}
          text={data.secondIndicatorText}
          value={data.secondIndicatorValue}
        />
        <CountIndicator
          iconName={data.thirdIndicatorIcon}
          text={data.thirdIndicatorText}
          value={data.thirdIndicatorValue}
        />
      </View>
      {data.description !== undefined && 
        <View style={{width: '100%', marginBottom: 5}}>
        <Card style={{margin: 5}}>
          <Card.Content>
            <Paragraph style={{textAlign: 'center'}}>
              {data.description}
            </Paragraph>
          </Card.Content>
        </Card>
      </View>
      }
      
      <Slider
        data={sliderData}
        onCharacterPress={onSliderItemPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingBottom: 10,
  },
  headerContainer: {width: '100%', marginVertical: 5},
  iconContainer: {width: '100%', marginBottom: 5, flexDirection: 'row'},
});

export default Information;
