import {useQuery} from '@tanstack/react-query'
export const useGetClassrooms = () => {
    const fetchClassrooms = async () => {
        const req = await fetch('https://intellilearn.onrender.com/classroom/', {
            method: 'GET',
            credentials: 'include'
        })
        const data = await req.json()
        if(!data.success){
            throw new Error(data.error)
        }
        return data.classrooms
    }
    const {data, error, isLoading} = useQuery({
        queryKey: 'classrooms',
        queryFn: () => fetchClassrooms()
    })
    return {data, error, isLoading}
}
