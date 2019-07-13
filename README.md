
## Rating-Bars-Group

 **Installation:**

 `npm i rating-bars-group -S` or `yarn add rating-bars-group`

  **Props:**

| Prop | Type | Description|Default|Required
|--|--|--|--|--|
| `bars` | array | Array of objects which contains `size`, `title` and `color` ||true
|`empHighest`|boolean|Whenever to emphasise the maximum number or not | false|false

  **Example:**
````
import React from "react";
import ReactDOM from "react-dom";
import { RatingGroup } from 'rating-bars-group';

const bars = [
  { size: 70, color: '#D20025', title: 'Angular'},
  { size: 100, color: '#53D2F9', title: 'React'},
  { size: 90, color: '#37AD70', title: 'Vue'}
];

function App()  {
  return (
	<RatingGroup bars={bars} />
  );
}
````

[View with Storybook](https://determined-einstein-121cee.netlify.com/?path=/story/storybook-knobs--props)