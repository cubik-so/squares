import React from 'react'
import dynamic from 'next/dynamic'
import { useMediaQuery } from 'usehooks-ts'

import { cn } from '@/utils/cn'

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
})

type MinimalLineGraphProps = {
    chartData: { name: string; data: number[][]; type?: string }[]
    color?: string[]
    theme: 'light' | 'dark'
    annotations?: ApexAnnotations
    className?: string
    xAxisType?: 'datetime' | 'category' | 'numeric'
    yAxisIsDollar?: boolean
    showXAxisDates?: boolean
}

export const MinimalLineGraph: React.FC<MinimalLineGraphProps> = ({
    chartData,
    color,
    theme,
    annotations,
    className,
    xAxisType,
    yAxisIsDollar,
    showXAxisDates = false,
}) => {
    const isMobile = useMediaQuery('(max-width: 768px)')

    const fontColor = theme === 'dark' ? 'white' : 'black'
    const secondaryFontColor = theme === 'dark' ? '#5A5A5A' : '#ADADAD'
    const surfaceColor = theme === 'dark' ? '#333333' : '#ffffff'
    const gridColor = theme === 'dark' ? '#333333' : '#E0E0E0'
    const chartAnnotations = annotations ? annotations : {}
    const tooltipContentFont = isMobile ? '12px' : '14px'
    const tooltipHeaderFont = isMobile ? '10px' : '12px'
    const tooltipPadding = isMobile ? '4px' : '8px'

    const data = {
        series: chartData,
        options: {
            theme: {
                mode: 'light',
                monochrome: {
                    enabled: true,
                },
            },
            chart: {
                type: 'area',
                height: 80,
                sparkline: {
                    enabled: true,
                },
            },
            stroke: {
                show: true,
                curve: 'smooth',
                lineCap: 'round',
                colors: color,
                width: 2,
                dashArray: 0,
            },
            // dataLabels: {
            //   enabled: false,
            // },
            grid: {
                show: false,
                borderColor: gridColor,
                strokeDashArray: 8,
                position: 'front',
                xaxis: {
                    lines: {
                        show: true,
                    },
                },
                yaxis: {
                    lines: {
                        show: false,
                    },
                },
                padding: {
                    left: 20,
                    right: 10,
                    top: 10,
                    bottom: showXAxisDates ? 50 : 10,
                },
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
            fill: {
                colors: color,
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    type: 'vertical',
                    gradientToColors: color,
                    shadeIntensity: 2,
                    opacityFrom: 0.3,
                    opacityTo: 0,
                    stops: [0, 90],
                },
            },
            annotations: chartAnnotations,
            noData: {
                text: 'No Data to display',
                color: fontColor,
            },
            plotOptions: {
                area: {
                    fillTo: 'end',
                },
            },
            forecastDataPoints: {
                count: 0,
                fillOpacity: 0.2,
                strokeWidth: 1,
                dashArray: 6,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
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
                type: 'datetime',
                labels: {
                    show: showXAxisDates,
                    style: {
                        colors: secondaryFontColor,
                        fontSize: '10px',
                    },
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
                shared: true,
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
                style="outline: 0px; display: flex; flex-direction: row; align-items: flex-start; justify-content: flex-start; background-color: ${surfaceColor}; padding: ${tooltipPadding}; gap: 8px; align-items: center;"
              >
                <div style="display: flex; justify-content: space-between;">
                  <span style="color: ${fontColor};  font-size: ${tooltipHeaderFont}; opacity: 50%;">${titleOfTooltip}:</span>
                </div>
                <span style="color: ${fontColor}; fontWeight: 500;  font-size: ${tooltipContentFont}">
                    <strong>${dollar}${tooltipData}</strong>
                </span>
              </div>
            `
                },
            },
        },
    }
    return (
        <div className={cn('overflow-visible', className)}>
            <Chart
                options={data.options as any}
                series={data.series}
                type={'area'}
                height={'100%'}
                width={'100%'}
            />
        </div>
    )
}
