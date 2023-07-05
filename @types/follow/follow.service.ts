import { AXIOS_AUTH } from "../api/api.auth";

export const FollowService = {
  getFollowings: async (userId: number) => {
    const result = await AXIOS_AUTH.get(`/api/follows/${userId}/followings`);
    return result.data;
  },
  getFollowers: async (userId: number) => {
    const result = await AXIOS_AUTH.get(`/api/follows/${userId}/followers`);
    return result.data;
  },
  following: async (id: number) => {
    const result = await AXIOS_AUTH.post(`/api/follows/${id}`);
    return result.data;
  },
  cancelFollowing: async (id: number) => {
    const result = await AXIOS_AUTH.delete(`/api/follows/${id}`);
    return result.data;
  },
};
