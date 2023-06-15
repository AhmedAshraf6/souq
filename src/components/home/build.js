const handleAdMore = () => {
  if (lastPage == currentPage - 1) {
    //   dispatch change isSpecial :true and currentPage = 1 and lastPage : 'as'
    turnToSpecial();
  } else {
    if (lastPageSpecial == currentPage - 1) {
      turnToPaidPackage();
    } else if (lastPagePaidPackage == currentPage - 1 && allAds.length < 50) {
      turnToFree();
    } else {
    }
  }
};

const {
  isLoading: load5,
  isError: err5,
  data: admoreads,
  error: error5,
} = useQuery('admoreads', handleAdMore, {
  enabled: admore,
});
