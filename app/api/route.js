import { data } from "@/lib/data"


export default function GET(request){
    const { searchParams } = new URL(request.url)

    const exercisesParam = searchParams.get("bodyPart").split(',')

    const filteredExercises = data.filter(exercise => {
        return exercisesParam.includes(exercise.muscle)
    })
    return Response.json(filteredExercises)
}