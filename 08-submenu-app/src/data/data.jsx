import {
  FaPython,
  FaJs,
  FaGithubSquare,
  FaKaggle,
  FaFreeCodeCamp,
  FaYoutube,
  FaGoogle,
} from "react-icons/fa";
import { VscGraphScatter, VscFileBinary, VscFileCode } from "react-icons/vsc";
import {
  DiPython,
  DiMysql,
  DiMongodb,
  DiReact,
  DiDatabase,
  DiCss3,
  DiHtml5,
} from "react-icons/di";

import { nanoid } from "nanoid";

const sublinks = [
  {
    pageId: nanoid(),
    page: "web development",
    links: [
      // Icons from 'react-icons/fa' and 'react-icons/di'
      {
        id: nanoid(),
        label: "python",
        icon: <FaPython />,
        url: "/product/python",
      },
      {
        id: nanoid(),
        label: "java script",
        icon: <FaJs />,
        url: "/product/java-script",
      },
      // ...
      {
        id: nanoid(),
        label: "HTML",
        icon: <DiHtml5 />,
        url: "/product/html",
      },
      // ...
    ],
  },
  {
    pageId: nanoid(),
    page: "machine learning",
    links: [
      // Icons from 'react-icons/fa' and 'react-icons/vsc'
      {
        id: nanoid(),
        label: "python",
        icon: <FaPython />,
        url: "/product/python",
      },
      {
        id: nanoid(),
        label: "math",
        icon: <VscGraphScatter />,
        url: "/product/math",
      },
      // ...
    ],
  },
  {
    pageId: nanoid(),
    page: "sources",
    links: [
      // Icons from 'react-icons/fa' and 'react-icons/vsc'
      {
        id: nanoid(),
        label: "github",
        icon: <FaGithubSquare />,
        url: "/product/github",
      },
      {
        id: nanoid(),
        label: "kaggle",
        icon: <FaKaggle />,
        url: "/product/kaggle",
      },
      // ...
    ],
  },
];

export default sublinks;
