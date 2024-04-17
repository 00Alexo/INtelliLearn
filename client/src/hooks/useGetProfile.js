import { useQuery } from "@tanstack/react-query"
export const useGetProfile = (username) => {
    const fetchProfile = async() => {
        try{
            const request = await fetch(`https://intellilearn.onrender.com/user/getUser/${username}`, {
                method: 'GET',
                credentials: 'include'
            })
            const response = await request.json()
            if(!response.success){
                throw new Error(response.error)
            }
            return response.user
        }catch(error){
            throw new Error(error.message)
        }
    }
    const {data, error, isLoading} = useQuery({
        queryKey: 'getUserProfile',
        queryFn: () => fetchProfile()
    })
    return {data, error, isLoading}
}