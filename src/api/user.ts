export const getAllUsers = async () => {
  try {
    const response = await fetch("https://dummyjson.com/users");
    if (!response) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data?.users;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export const getSingleUser = async (userId: string) => {
  try {
    const response = await fetch(`https://dummyjson.com/users/${userId}`);
    if (!response) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
