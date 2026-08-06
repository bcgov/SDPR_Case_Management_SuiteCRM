    protected function getDefaultWidgetConfig(array $tabs, $key, $tab): array
    {
        return [
            'type' => 'statistics',
            'options' => [
                'subpanelWidget' => [
                    'rows' => [
                        [
                            'justify' => 'end',
                            'cols' => [
                                [
                                    'icon' => $tab['icon'] ?? $tab['module'],
                                ],
                                [
                                    'labelKey' => $tabs[$key]['title_key'],
                                    'class' => 'sub-panel-banner-button-title',
                                    'bold' => true,
                                ],
                                [
                                    'statistic' => 'default',
                                    'class' => 'sub-panel-banner-value',
                                    'bold' => true,
                                ],
                            ]
                        ],
                    ]
                ]
            ]
        ];
    }