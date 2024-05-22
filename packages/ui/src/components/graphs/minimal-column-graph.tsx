import React from 'react'
import dynamic from 'next/dynamic'

import { cn } from '@/utils/cn'

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
})

type MinimalColumnGraphProps = {
    chartData: {
        name: string
        data: { x: string; y: number }[] | number[][]
    }[]
    color?: string[]
    theme: 'light' | 'dark'
    annotations?: ApexAnnotations
    className?: string
    xAxisType?: 'datetime' | 'category' | 'numeric'
    yAxisIsDollar?: boolean
}

export const MinimalColumnGraph: React.FC<MinimalColumnGraphProps> = ({
    chartData,
    color,
    theme,
    annotations,
    className,
    xAxisType,
    yAxisIsDollar,
}) => {
    const fontColor = theme === 'dark' ? 'white' : 'black'
    const surfaceColor = theme === 'dark' ? '#333333' : '#ffffff'
    const chartAnnotations = annotations ? annotations : {}

    const data = {
        series: chartData,
        options: {
            chart: {
                type: 'bar',
                stacked: false,
                toolbar: {
                    show: false,
                },
                zoom: {
                    enabled: false,
                },
                parentHeightOffset: 0,
                sparkline: {
                    enabled: true,
                },
            },
            grid: {
                show: false,
                padding: { left: 0, right: 0, top: 0, bottom: 0 },
            },
            plotOptions: {
                bar: {
                    columnWidth: '14%',
                    ranges: [
                        {
                            from: 0,
                            to: 0,
                            color: color,
                        },
                    ],
                    borderRadius: 2,
                    borderRadiusApplication: 'round',
                },
            },
            dataLabels: {
                enabled: false,
            },
            annotations: chartAnnotations,
            noData: {
                text: 'No Data to display',
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
            yaxis: {
                lines: {
                    show: false,
                },
                labels: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                crosshairs: {
                    show: false,
                },
                tooltip: {
                    enabled: false,
                },
            },
            xaxis: {
                type: xAxisType,
                labels: {
                    //     show: false,
                },
                lines: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
                crosshairs: {
                    show: false,
                },
                tooltip: {
                    enabled: false,
                },
            },
            tooltip: {
                // shared: true,
                theme: theme,
                custom: ({ series, seriesIndex, dataPointIndex, w }: any) => {
                    const category = w.globals.seriesX[seriesIndex][dataPointIndex]
                    const tooltipData = series[seriesIndex][dataPointIndex]
                    const timestamp = w.globals.seriesX[seriesIndex][dataPointIndex]
                    const date = new Date(timestamp)
                        .toLocaleDateString(undefined, {
                            day: 'numeric',
                            month: 'short',
                        })
                        .replace(/\s\d{4}$/, '') // Removes the year part

                    const titleOfTooltip = xAxisType === 'datetime' ? date : category
                    const dollar = yAxisIsDollar ? '$' : ''

                    return `
                <div
                class="arrow_box"
                style="border: 0px; outline: 0px; display: flex; flex-direction: row; align-items: flex-start; justify-content: flex-start; background-color: ${surfaceColor}; padding: 8px; gap: 8px; align-items: center;"
              >
                <div style="display: flex; justify-content: space-between;">
                  <span style="color: ${fontColor};  font-size: 14px; opacity: 50%;">${titleOfTooltip}:</span>
                </div>
                <span style="color: ${fontColor}; fontWeight: 500;  font-size: 14px">
                    <strong>${dollar}${tooltipData}</strong>
                </span>
              </div>
            `
                },
            },
        },
    }
    return (
        <div className={cn('', className)}>
            <Chart
                options={data.options as any}
                series={data.series}
                type={'bar'}
                height="100%"
                width="100%"
            />
        </div>
    )
}
