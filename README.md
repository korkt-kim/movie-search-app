# 프로젝트 설명 [![Netlify Status](https://api.netlify.com/api/v1/badges/dacd4524-0b70-4be9-99b6-0e5352473ef5/deploy-status)](https://app.netlify.com/sites/rlaebqebq-movie-search-app/deploys)

영화를 검색하고 즐겨찾기로 등록 할 수 있는 React 앱입니다.

[배포링크](https://rlaebqebq-movie-search-app.netlify.app/)

# 사용기술, 라이브러리

- React
- TypeScript
- [Recoil](https://recoiljs.org/)
- [Recoil-persist](https://github.com/polemius/recoil-persist)
- [Axios](https://github.com/axios/axios)

# 구현 기능

1. 검색어를 입력하면 오픈 API를 이용해 검색 결과를 불러옴.
2. 검색 결과 목록을 최하단으로 내렸을 때 다음 페이지를 불러옴. (무한 스크롤 구현)
3. 결과 결과 목록에서 목록을 클릭하면 선택창이 뜨며 즐겨찾기/취소 선택 가능함
4. 즐겨찾기 탭에서 즐겨찾기 추가한 목록 확인 가능.
5. 즐겨찾기 취소를 하면 즐겨찾기 목록에서 해당 항목이 사라짐.
6. 즐겨찾기 목록은 localStorage에 저장되므로 새로고침해도 데이터는 유지됨.


![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/50236673/168815757-86086779-76b3-4fe2-8928-191852125359.gif)![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/50236673/168815774-9ee7598d-1d5c-4f77-802a-60d1c5a44abc.gif)
