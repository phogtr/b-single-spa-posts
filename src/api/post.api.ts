export interface IPostData {
  id: string;
  title: string;
  body: string;
}

export const getPost: (page: number) => Promise<IPostData> = async (
  page: number
) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${page}`);
  return res.json();
};
