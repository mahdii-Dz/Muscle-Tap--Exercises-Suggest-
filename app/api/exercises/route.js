import { exercises } from "@/lib/data"


export function GET(request){
    const { searchParams } = new URL(request.url)

    const exercisesParam = searchParams.get("muscles").split(',')

    const filteredExercises = exercises.filter(exercise => {
        return exercisesParam.includes(exercise.muscle)
    })
    return Response.json(filteredExercises)
}