import React, { Fragment, useState, useEffect, FC } from "react";
// import { TabContent, TabPane, Nav, NavItem, Fade } from "reactstrap";
import classnames from "classnames";
import Link from "next/link";
// import 'react-tabs/style/react-tabs.css';
// import thumb1 from '../../public/images/doc/img/header/widget/tab1.jpg';
// import thumb2 from '../../public/images/doc/img/header/widget/tab2.jpg';
// import thumb3 from '../../public/images/doc/img/header/widget/tab3.jpg';
// import thumb4 from '../../public/images/doc/img/header/widget/tab4.jpg';
// import thumb5 from '../../public/images/doc/img/header/widget/tab5.jpg';
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { API_LINK } from "../../utils/constantes";
import axios from "axios";
import { ArticleDataType } from "../../data/types";

const data = [
  {
    image: "/images/doc/img/header/widget/tab1.jpg",
    title: "Copa America: Luis Suarez from devastated US",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
  },
  {
    image: "/images/doc/img/header/widget/tab2.jpg",
    title: "Nancy Zhang a Chinese busy woman and Dhaka",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
  },
  {
    image: "/images/doc/img/header/widget/tab3.jpg",
    title: "U.S. Response subash says he will label regions by risk of…",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
  },
  {
    image: "/images/doc/img/header/widget/tab4.jpg",
    title: "Venezuela elan govt and opposit the property collect",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
  },
  {
    image: "/images/doc/img/header/widget/tab5.jpg",
    title: "Cheap smartphone sensor could help you old food safe",
    category: "TECHNOLOGY",
    date: "March 26, 2020",
  },
];
export interface PageWidgetTabPaneProps {
  arr: ArticleDataType[];
  a_id?: string | number;
  id?: string | number;
  dark?: boolean;
}

const WidgetTabPane: FC<PageWidgetTabPaneProps> = ({ arr, a_id, id, dark }) => {
  return (
    //kanet au lieu div fi plasetha Fade

    <div
    // in={id === a_id}
    >
      <div className="widget tab_widgets">
        {arr?.map((item, i) => (
          <Fragment key={i}>
            <div className="single_post widgets_small">
              <div className="post_img">
                <div className="img_wrap">
                  <Link href="/">
                    <img
                      style={{ width: 100, height: 65 }}
                      src={item.image}
                      alt="thumb"
                    />
                  </Link>
                </div>
              </div>
              <div className="single_post_text">
                <div className="meta2 meta_separator1">
                  <>
                    <Link
                      href={"/article?" + item.typearticle + "?" + item.title}
                    >
                      <>
                        <a
                          href={
                            "/article?" + item.typearticle + "?" + item.title
                          }
                        >
                          {item.category}
                        </a>
                      </>
                    </Link>
                    <Link
                      href={"/article?" + item.typearticle + "?" + item.title}
                    >
                      <>
                        <a
                          href={
                            "/article?" + item.typearticle + "?" + item.title
                          }
                        >
                          {item.date}
                        </a>
                      </>
                    </Link>
                  </>
                </div>
                <Link href={"/article?" + item.typearticle + "?" + item.title}>
                  <>
                    <h4>
                      <a
                        href={"/article?" + item.typearticle + "?" + item.title}
                      >
                        {item.title}{" "}
                      </a>
                    </h4>
                  </>
                </Link>
              </div>
            </div>
            <div className="space-15" />
            {dark ? (
              <div className="border_white" />
            ) : (
              <div className="border_black" />
            )}
            <div className="space-15" />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export interface PageWidgetTabProps {
  topComment?: ArticleDataType[];
  topCount?: ArticleDataType[];
  topShare?: ArticleDataType[];
  className?: string;
  dark: boolean;
}

const WidgetTab: FC<PageWidgetTabProps> = ({
  className,
  dark,
  topComment,
  topCount,
  topShare,
}) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab: string) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className={`widget_tab md-mt-30 ${className}`}>
      <Tabs>
        <TabList style={{ display: " inline-flex", width: "100%" }}>
          <Tab>
            <Link href="#">
              <>
                <a
                  href="#"
                  className={classnames({ active: activeTab === "1" })}
                  onClick={() => {
                    toggle("1");
                  }}
                >
                  + Lus
                </a>
              </>
            </Link>
          </Tab>
          <Tab>
            <Link href="#">
              <>
                <a
                  href="#"
                  className={classnames({ active: activeTab === "2" })}
                  onClick={() => {
                    toggle("2");
                  }}
                >
                  +Commentés
                </a>
              </>
            </Link>
          </Tab>
          <Tab>
            <Link href="#">
              <>
                <a
                  href="#"
                  className={classnames({ active: activeTab === "3" })}
                  onClick={() => {
                    toggle("3");
                  }}
                >
                  + Partagés{" "}
                </a>
              </>
            </Link>
          </Tab>
        </TabList>
        {/* </Tabs>
      <Tabs defaultActiveKey={activeTab} id="uncontrolled-tab-example"> */}
        {/* <Tab eventKey="1" title={activeTab}> */}
        <TabPanel>
          <WidgetTabPane
            dark={dark}
            a_id={activeTab}
            id="1"
            arr={topCount ? topCount : []}
          />
          {/* </Tab> */}
        </TabPanel>
        <TabPanel>
          {/* <Tab eventKey="2" title={activeTab}> */}
          <WidgetTabPane
            dark={dark}
            a_id={activeTab}
            id="2"
            arr={topComment ? topComment : []}
          />
          {/* </Tab> */}
        </TabPanel>
        <TabPanel>
          {/* <Tab eventKey="3" title={activeTab}> */}
          <WidgetTabPane
            dark={dark}
            a_id={activeTab}
            id="3"
            arr={topShare ? topShare : []}
          />
          {/* </Tab> */}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default WidgetTab;
