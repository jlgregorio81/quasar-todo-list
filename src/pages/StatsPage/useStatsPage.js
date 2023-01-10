import { useStoreTodo } from 'src/stores/storeTodo'
import { computed, ref } from 'vue'


export function useStatsPage() {

    const storeTodo = useStoreTodo()

    //..dynamic chart 
    const chartData = computed(() => {
        return {
            labels : ['A fazer', 'Fazendo', 'Feito'],
            datasets : [{
                backgroundColor : ['#FFCDD2', '#BBDEFB', '#C8E6C9'],
                data: [storeTodo.getCountTodo, storeTodo.getCountDoing, storeTodo.getCountDone]}
            ]
        }
    }) 
    //chart static
    // const chartData = {
    //     labels: ['A fazer', 'Fazendo', 'Feito'],
    //     datasets: [{
    //         backgroundColor: ['#FFCDD2', '#BBDEFB', '#C8E6C9'],
    //         data: [storeTodo.getCountTodo, storeTodo.getCountDoing, storeTodo.getCountDone]
    //     }
    //     ]
    // }

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            title: {
                display: true,
                text: 'Estatísticas Gerais',
                font: {
                    size: 24
                }
            },
            tooltip: {
                titleFont: {
                    size: 18
                },
                boxWidth: 18,
            },
            legend: {
                labels: {
                    font: {
                        size: 20
                    }
                }
            }
        }
    }

    return { storeTodo, chartData, chartOptions }

}