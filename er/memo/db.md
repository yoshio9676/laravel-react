# DBスキーマメモ

## tables

### users

| columns | others |
|---------|--------|
|id|PK|
|name|string|
|email|string|
|password|string|

### company

| columns | others |
|---------|--------|
|name|string|
|timestamps|datetime|

### member

| columns | others |
|---------|--------|
|name|string|
|email|string|
|password|string|
|company_id|big integer, unsigned|
|timestamps|datetime|

### projects

| columns | others |
|---------|--------|
|title|string|
|description|text|
|company_id|big integer, unsigned|
|timestamps|datetime|

### tasks

| columns | others |
|---------|--------|
|id|PK|
|title|string|
|text|text|
|start_date|date, nullable|
|end_date|date, nullable|
|status_id|big integer, unsigned, default = 0|
|milestone_id|big integer, unsigned, nullable|
|tag_id|big integer, unsigned, nullable|
|timestamps|datetime|

### comments

| columns | others |
|---------|--------|
|text|string|
|member_id|big integer, unsigned|
|task_id|big integer, unsigned|
|timestamps|datetime|

### statuses_masta

| columns | others |
|---------|--------|
|id|PK|
|status|string, 0->未処理,1->処理中,2->完了,3->保留|
|project_id|big integer, unsigned, nullable, default = 0(全プロジェクト共通)|
|color_id|big integer, unsigned|
|timestamps|datetime|

#### color default
未処理 => 黄
処理中 => 緑
完了   => 青
保留   => 赤

### milestones

| columns | others |
|---------|--------|
|id|PK|
|title|string|
|description|text|
|project_id|big integer, unsigned|
|color_id|big integer, unsigned|
|timestamps|datetime|

### tags

| columns | others |
|---------|--------|
|id|PK|
|name|string|
|project_id|big integer, unsigned, default=0(全プロジェクト共通)|
|color_id|big integer, unsigned|
|timestamps|datetime|

#### 全プロジェクト共通
実装 => 紫
修正依頼 => 水
バグ => 赤
issue => オレンジ

### wikis

| columns | others |
|---------|--------|
|title|string|
|description|text|
|project_id|big integer, unsigned|
|timestamps|datetime|

### colors_masta

| columns | others |
|---------|--------|
|color|string|
|color_code|string|
|timestamps|datetime|

#### color(全50色)
1 black => #000000
2 gray => #808080
3 gainsboro => #dcdcdc
4 white => #ffffff
5 ghostwhite => #f8f8ff
6 linen => #faf0e6
7 bisque => #ffe4c4
8 peachpuff => #ffdab9
9 lavenderblush => #fff0f5
10 ivory => #fffff0

11 lavender => #e6e6fa
12 steelblue => #4682b4
13 royalblue => #4169e1
14 blue => #0000ff
15 deepskyblue => #00bfff
16 skyblue => #87ceeb
17 paleturquoise => #afeeee
18 aqua => #00ffff
19 darkturquoise => #00ced1
20 cadetblue => #5f9ea0

21 teal => #008080
22 darkgreen => #006400
23 green => #008000
24 palegreen => #98fb98
25 mediumaquamarine => #66cdaa
26 springgreen => #00ff7f
27 lime => #00ff00
28 darkolivegreen => #556b2f
29 olive => #808000
30 beige => #f5f5dc

31 lightyellow => #ffffe0
32 wheat => #f5deb3
33 yellow => #ffff00
34 orange => #ffa500
35 goldenrod => #daa520
36 chocolate => #d2691e
37 maroon => #800000
38 brown => #a52a2a
39 salmon => #fa8072
40 lightsalmon => #ffa07a

41 tomato => #ff7f50
42 red => #ff0000
43 deeppink => #ff1493
44 pink => #ffc0cb
45 thistle => #d8bfd8
46 violet => #ee82ee
47 darkviolet => #9400d3
48 purple => #8000080
49 indigo => #4b0082
50  slateblue => #6a5acd
