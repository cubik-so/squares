import React from 'react'
import dynamic from 'next/dynamic'
import { useMediaQuery } from 'usehooks-ts'
import { nFormatterWithCommas } from '../../utils/formatK'

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
})

type LineGraphProps = {
    chartData: { name: string; type: string; data: number[][] }[]
    color: string[]
    theme?: 'light' | 'dark'
    annotations?: ApexAnnotations
    id?: string
    showXAxisDates?: boolean
    yAxisIsDollar?: boolean
}

export const LineGraph: React.FC<LineGraphProps> = ({
    chartData,
    color,
    theme,
    annotations,
    id,
    showXAxisDates = false,
    yAxisIsDollar = false,
}) => {
    const textColorPrimary = theme === 'dark' ? 'white' : 'black'
    const textColorSecondary = theme === 'dark' ? '#999999' : '#666666'
    const surfaceColor = theme === 'dark' ? '#333333' : '#ffffff'
    const gridColor = theme === 'dark' ? '#333333' : '#E0E0E0'
    const crosshairBorderColor = theme === 'dark' ? '#7E7E7E' : '#1A1A1A'
    const chartAnnotations = annotations ? annotations : {}
    const isMobile = useMediaQuery('(max-width: 768px)')

    const tooltipPadding = isMobile ? '12px' : '16px'
    const tooltipGap = isMobile ? '10px' : '24px'
    const tooltipDateFont = isMobile ? '12px' : '14px'
    const tooltipHeaderFont = isMobile ? '10px' : '12px'
    const tooltipContentFont = isMobile ? '14px' : '18px'
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
                sparkline: {
                    enabled: true,
                },
                dataLabels: {
                    enable: true,
                },
            },
            stroke: {
                show: [false, true],
                curve: 'smooth',
                lineCap: 'round',
                colors: color,
                width: 3,
                dashArray: 0,
            },
            grid: {
                show: true,
                borderColor: gridColor,
                strokeDashArray: 8,
                position: 'back',
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
                    left: 10,
                    right: 10,
                    top: 10,
                    bottom: showXAxisDates ? 50 : 0,
                },
            },
            markers: {
                size: 0,
                colors: color,
                strokeWidth: 0,
            },
            legend: {
                show: false,
                position: 'top',
                horizontalAlign: 'right',
                offsetX: -10,
            },
            fill: {
                colors: color,
                opacity: [0.85, 0.25, 1],
                type: ['gradient', 'gradient', 'gradient'],
                gradient: {
                    shade: 'dark',
                    type: 'vertical',
                    gradientToColors: color,
                    shadeIntensity: 2,
                    opacityFrom: 0.5,
                    opacityTo: 0.1,
                    stops: [0, 90],
                },
            },
            annotations: chartAnnotations,
            noData: {
                text: 'No Data to display',
            },
            plotOptions: {
                area: {
                    fillTo: 'end',
                },
                bar: {
                    columnWidth: '100%',
                    backgroundBarColors: color,
                    borderRadius: 1,
                    borderRadiusApplication: 'around',
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
                show: true,
            },
            yaxis: {
                lines: {
                    show: true,
                },
                labels: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                crosshairs: {
                    show: true,
                    opacity: 0.5,
                    stroke: {
                        color: crosshairBorderColor,
                        width: 1,
                        dashArray: 8,
                    },
                },
                tooltip: {
                    enabled: false,
                },
            },
            xaxis: {
                type: 'datetime',
                labels: {
                    show: true,
                    trim: true,
                    style: {
                        colors: gridColor,
                        fontSize: '12px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 400,
                        cssClass: 'apexcharts-xaxis-label',
                    },
                    format: undefined,
                    formatter: undefined,
                    datetimeUTC: true,
                    datetimeFormatter: {
                        year: 'yyyy',
                        month: "MMM 'yy",
                        day: 'dd MMM',
                        hour: 'HH:mm',
                    },
                },
                lines: {
                    show: true,
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: true,
                    borderType: 'solid',
                    color: gridColor,
                    height: 6,
                    offsetX: 0,
                    offsetY: 0,
                },
                crosshairs: {
                    show: true,
                    stroke: {
                        color: gridColor,
                        width: 1,
                        dashArray: 8,
                    },
                },
                tooltip: {
                    enabled: false,
                    custom: undefined,
                },
            },
            tooltip: {
                shared: true,
                theme: theme,
                custom: ({ series, seriesIndex, dataPointIndex, w }: any) => {
                    const tooltipData = series.map((s: Record<string, any>) => {
                        return s[dataPointIndex]
                        // return series[0] ? `$${s[dataPointIndex]}` : s[dataPointIndex];
                    })
                    const timestamp = w.globals.seriesX[seriesIndex][dataPointIndex]
                    const date = new Date(timestamp).toLocaleDateString(undefined, {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                    })
                    const dollar = yAxisIsDollar ? '$' : ''

                    const seriesHtml = tooltipData
                        .map((item: number | string, index: number) => {
                            const displayItem =
                                w.globals.seriesNames[index] === 'Contributions'
                                    ? `${dollar}${nFormatterWithCommas(Number(item))}`
                                    : nFormatterWithCommas(Number(item))
                            return item !== undefined
                                ? `<div
                  style="display: flex; align-items: flex-start; justify-content: flex-start;"
                >
                  <span
                    style="height: 10px; width: 10px; margin-top: 4px; background-color: ${color[index]}; border-radius: 50%; display: inline-block; margin-right: 8px;"
                  ></span>
                  <div
                    style="display: flex; flex-direction: column; align-items: start; justify-content: center;"
                  >
                    <div
                      style="font-size: ${tooltipHeaderFont}; color: ${textColorSecondary}; "
                    >
                      ${w.globals.seriesNames[index]}
                    </div>
                    <span
                      style="font-size: ${tooltipContentFont}; color: ${textColorPrimary}; font-weight: 600;"
                    >
       
                    ${displayItem}
                    </span>
                  </div>
                </div>`
                                : ''
                        })
                        .join('')

                    return `<div
                    style="background-color: ${surfaceColor}; border: '1px solid red'; padding: ${tooltipPadding}; width: 'fit-content'; display: inline-block; font-family: Arial, sans-serif; font-size: 14px;"
                  >
                    <div
                      style="margin-bottom: ${tooltipPadding}; font-size: ${tooltipDateFont}; color: ${textColorPrimary};"
                    >
                      ${date}
                    </div>
                    <div
                      style="display: flex; gap: ${tooltipGap}; flex-direction: row; align-items: flex-start; justify-content: flex-start;"
                    >
                      ${seriesHtml}
                    </div>
                  </div>`
                },
            },
        },
    }
    return (
        <div className="w-full overflow-visible align-bottom min-h-[180px] md:min-h-[300px]">
            <Chart
                id={id}
                options={data.options as any}
                series={data.series}
                type={'area'}
                width={'100%'}
                height={300}
            />
        </div>
    )
}
