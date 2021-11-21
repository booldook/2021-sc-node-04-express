module.exports = (page = 1, totalRecord, listCnt = 5, pagerCnt = 3) => {
  let totalPage = Math.ceil(totalRecord / listCnt);
  let startIdx = (listCnt = (page - 1) * listCnt);
  let startPage = Math.floor((page - 1) / pagerCnt) * pagerCnt + 1;
  let endPage = startPage + Number(pagerCnt) - 1;
  let nextPage = Number(page) + 1;
  let prevPage = Number(page) - 1;
  let nextPager = endPage + 1;
  let prevPager = startPage - 1;
  if (prevPage < 1) prevPage = 1;
  if (nextPage > totalPgae) nextPage = totalPage;
  if (prevPager < 1) prevPager = 1;
  if (nextPager > totalPgae) nextPager = totalPage;
  return {
    page,
    totalRecord,
    listCNt,
    pagerCnt,
    totalPage,
    startIdx,
    startPage,
    endPage,
    nextPage,
    prevPage,
    nextPager,
    prevPager,
  };
};
