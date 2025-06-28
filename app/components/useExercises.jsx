'use client'
import { useQuery } from "@tanstack/react-query"


async function fetchExercises(muscles){
    const musclesStr = muscles.join(',')
    const res = await fetch(`/api/exercises?muscles=${musclesStr}`)
    if(!res.ok) throw new Error('Failed to fetch data')
    return res.json()
}

export default function useExercises(muscles){
    return useQuery({
        queryKey: ['exercises',muscles],
        queryFn: () => fetchExercises(muscles),
        refetchOnWindowFocus: false,
    })
}