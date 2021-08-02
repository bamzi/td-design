import { NativeModules } from 'react-native';
import { useState } from 'react';
import { RADIUS, SPECIAL, PAGE, PAGESIZE } from '../constant';
import type {
  SeaechPOIParams,
  ResultPOI,
  KeyWordsSeaechPOIParams,
  PolygonSearchParams,
} from './AMapSearch';

const AMapSearchManager = NativeModules.AMapSearchManager;
function useAMapSearch() {
  const [data, setData] = useState<ResultPOI[]>();

  const onPOISearchDone = (err: any, result: ResultPOI[]) => {
    if (err) {
      Error('err');
    } else {
      setData(result);
    }
  };

  const aMapPOIAroundSearch = (params: SeaechPOIParams) => {
    const {
      latitude,
      longitude,
      keywords = '',
      radius = RADIUS,
      city = '',
      special = SPECIAL,
      page = PAGE,
      pageSize = PAGESIZE,
      types = '',
    } = params;

    AMapSearchManager.aMapPOIAroundSearch(
      latitude,
      longitude,
      keywords,
      radius,
      city,
      special,
      page,
      pageSize,
      types,
      onPOISearchDone
    );
  };

  const aMapPOIKeywordsSearch = (params: KeyWordsSeaechPOIParams) => {
    const {
      keywords = '',
      city = '',
      page = PAGE,
      pageSize = PAGESIZE,
      types = '',
      cityLimit = false,
    } = params;

    AMapSearchManager.aMapPOIKeywordsSearch(
      keywords,
      city,
      types,
      cityLimit,
      page,
      pageSize,
      onPOISearchDone
    );
  };

  const aMapPOIPolygonSearch = (params: PolygonSearchParams) => {
    const {
      points = [],
      keywords = '',
      page = PAGE,
      pageSize = PAGESIZE,
      types = '',
    } = params;

    AMapSearchManager.aMapPOIPolygonSearch(
      points,
      keywords,
      page,
      pageSize,
      types,
      onPOISearchDone
    );
  };

  return {
    aMapPOIKeywordsSearch: aMapPOIKeywordsSearch,
    aMapPOIAroundSearch: aMapPOIAroundSearch,
    aMapPOIPolygonSearch: aMapPOIPolygonSearch,
    data: data,
  };
}

export default useAMapSearch;
