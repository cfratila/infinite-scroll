export  const getPhotoList = async (pageParam : number) => {
  const response = await fetch(
    `https://picsum.photos/v2/list?page=${pageParam}&limit=10`
  );
  const results = await response.json();
  
  return { results, nextPage: pageParam + 1, totalPages: 100 };
}