import { useQuery } from "@tanstack/react-query";

export const useGetMyClasses = (username) => {
    const fetchClassrooms = async () => {
        try{
            const req = await fetch(`https://intellilearn.onrender.com/classroom/myclasses/${username}`, {
                method: "GET",
                credentials: "include",
            });
            const data = await req.json();
            if (!data.success) {
                throw new Error(data.error);
            }
            return data.classrooms;
        }catch(error){
            throw new Error(error.message)
        }
    }
    const { data, error, isLoading } = useQuery({
        queryKey: "getClassroom",
        queryFn: () => fetchClassrooms(),
    });
    return { data, error, isLoading };
}