import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'

import { cn } from '../../../lib/utils'

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
})

type MinimalTreeMapGraphProps = {
    chartData: { name: string; data: number[][] | { x: string; y: number }[] }[]
    color?: string[]
    theme?: 'light' | 'dark'
    annotations?: ApexAnnotations
    className?: string
}

export const MinimalTreeMapGraph: React.FC<MinimalTreeMapGraphProps> = ({
    chartData,
    color,
    theme = 'light',
    annotations,
    className,
}) => {
    const surfaceColor = theme === 'dark' ? '#333333' : '#ffffff'
    const chartAnnotations = annotations ? annotations : {}

    // a function to get the <rect> tag with class .apexcharts-treemap-node and set the rx and ry value to 8

    useEffect(() => {
        const svg = document.querySelector('.apexcharts-svg')
        const rects = svg?.querySelectorAll('.apexcharts-treemap-rect')
        if (rects) {
            rects.forEach((rect) => {
                rect.setAttribute('rx', '8')
                rect.setAttribute('ry', '8')
                rect.setAttribute('stroke', surfaceColor)
                rect.setAttribute('stroke-width', '4')
            })
        }
    }, [])

    const data = {
        series: chartData,
        options: {
            theme: {
                mode: 'light',
                monochrome: {
                    enabled: true,
                },
            },
            plotOptions: {
                treemap: {
                    distributed: true,
                    enableShades: true,
                    useFillColorAsStroke: false,
                    dataLabels: {
                        enable: true,
                        style: {
                            fontSize: '10px',
                        },
                        format: 'scale',
                    },
                    color: color,
                },
            },
            colors: color,
            chart: {
                type: 'treemap',
                height: 'auto',
                sparkline: {
                    enabled: true,
                },
            },
            grid: {
                show: false,
                padding: { left: 0, right: 0, top: 0, bottom: 0 },
            },
            markers: {
                size: 0,
            },
            legend: {
                show: false,
                position: 'top',
                horizontalAlign: 'right',
                offsetX: -10,
            },
            dataLabels: {
                enabled: true,
                textAnchor: 'middle',
                offsetY: -2,
                style: {
                    fontSize: '12px',
                    fontWeight: '400',
                },
                background: {
                    enabled: true, //TODO: This should draw a rectangle around the number
                    foreColor: '#ffffff',
                    padding: 2,
                    borderWidth: 1,
                    borderColor: '#ffffff',
                    opacity: 1,
                },
            },
            annotations: chartAnnotations,
            noData: { text: 'No Data to display' },
        },
    }
    return (
        <div key={'tree_map_chart'} className={cn('', className)}>
            <Chart
                options={data.options as any}
                series={data.series}
                type={'treemap'}
                height={'100%'}
                width={'100%'}
            />
        </div>
    )
}
