import clsx from "clsx";
import svgPaths from "./svg-bo9haqmeeh";
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-start flex flex-wrap items-start pb-[16px] px-[8px] relative w-full">
        <div className={clsx("relative rounded-[4px]", additionalClassNames)}>
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[4px] items-center p-[8px] relative w-full">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TreeView({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-[260px]">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[8px] py-[7px] relative w-full">{children}</div>
      </div>
    </div>
  );
}
type TaskSelectorHelper2Props = {
  additionalClassNames?: string;
};

function TaskSelectorHelper2({ children, additionalClassNames = "" }: React.PropsWithChildren<TaskSelectorHelper2Props>) {
  return (
    <div className={clsx("flex-none h-[9.12px] w-[5.739px]", additionalClassNames)}>
      <div className="relative size-full" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.73912 9.12003">
          {children}
        </svg>
      </div>
    </div>
  );
}

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("relative rounded-[4px]", additionalClassNames)}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[8px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function TaskSelectorHelper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <div className="content-stretch flex gap-[12.5px] items-center justify-center relative size-full">
        <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="icon-Data pipeline 2">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="icon-Data pipeline 2">{children}</g>
          </svg>
        </div>
      </div>
    </div>
  );
}
type ContentText1Props = {
  text: string;
};

function ContentText1({ text }: ContentText1Props) {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <HideThisNoIcon />
      <p className="font-['Market_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#191919] text-[14px]">{text}</p>
    </div>
  );
}
type ContentTextProps = {
  text: string;
};

function ContentText({ text }: ContentTextProps) {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <HideThisNoIcon />
      <p className="font-['Market_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#161616] text-[14px]">{text}</p>
    </div>
  );
}

function HideThisNoIcon() {
  return (
    <div className="content-stretch flex items-center pr-[8px] relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Open">
        <div className="absolute inset-[33.33%_20.83%]" data-name="Shape">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 5.33333">
            <path clipRule="evenodd" d={svgPaths.p154d8f80} fill="var(--fill-0, #191919)" fillRule="evenodd" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TaskSelectorHelper() {
  return (
    <div className="absolute inset-[52.44%_4.17%_4.17%_53.25%]">
      <div className="absolute inset-[-9.6%_-9.78%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.2207 12.4135">
          <g id="Group 427318830">
            <path d={svgPaths.p5949d70} fill="var(--fill-0, #C5C5C5)" id="Vector" stroke="var(--stroke-0, white)" />
            <path d={svgPaths.p2d44c600} fill="var(--fill-0, #767676)" id="Vector_2" />
            <path d={svgPaths.p34d9e980} fill="var(--fill-0, #DDDDDD)" id="Vector_3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function TaskSelectorVector1() {
  return (
    <div className="absolute inset-[0_0_37.14%_4.17%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 15.0861">
        <path clipRule="evenodd" d={svgPaths.p2b466770} fill="var(--fill-0, #E25A1C)" fillRule="evenodd" id="Vector" />
      </svg>
    </div>
  );
}

function TaskSelectorVector() {
  return (
    <div className="absolute inset-[0_0_46.44%_5.61%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.6547 12.8555">
        <path d={svgPaths.p26ea2980} fill="var(--fill-0, #E25A1C)" id="Vector" />
      </svg>
    </div>
  );
}
type TaskSelectorProps = {
  className?: string;
  property1?: "Batch Inference" | "Data Movement" | "Dependency Check" | "Dependency Touch" | "HTTP Operator" | "Pyspark Cloud" | "Pyspark Yarn" | "Shell Script" | "Spark Jar" | "Spark SQL" | "Rheos SQL" | "pipeline" | "Pilot" | "data quality" | "ray job" | "Dint" | "Pipeline Initialization" | "UOW Update" | "Data Retention" | "oracle" | "ZeroETL" | "Governed Ods" | "Variable" | "icn-FlinkJar (1)" | "if else 1" | "datacopy" | "data pull" | "RDBMS 1";
};

function TaskSelector({ className, property1 = "Batch Inference" }: TaskSelectorProps) {
  if (property1 === "Spark SQL") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Property 1=Spark SQL">
        <TaskSelectorVector />
        <div className="absolute inset-[53.56%_-1%_-2.67%_1.8%]" data-name="SQL">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.8091 11.7842">
            <g id="SQL">
              <path d={svgPaths.p1a85ecc0} fill="var(--fill-0, #E25A1C)" id="Vector" />
              <path d={svgPaths.p3e744200} fill="var(--fill-0, #E25A1C)" id="Vector_2" />
              <path d={svgPaths.pe59e000} fill="var(--fill-0, #E25A1C)" id="Vector_3" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (property1 === "Shell Script") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Property 1=Shell Script">
        <div className="absolute bottom-[18.75%] left-[-0.01%] right-0 top-1/2" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.0015 7.50016">
            <path d={svgPaths.p178c0c00} fill="var(--fill-0, #6C5BEB)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[0_6.25%_56.25%_6.25%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 10.5">
            <path d={svgPaths.pdc34d80} fill="var(--fill-0, #6C5BEB)" id="Vector" opacity="0.5" />
          </svg>
        </div>
        <div className="absolute inset-[0_6.25%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 24">
            <path d={svgPaths.p179273f0} fill="var(--fill-0, #6C5BEB)" id="Vector" />
          </svg>
        </div>
      </div>
    );
  }
  if (property1 === "Spark Jar") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Property 1=Spark Jar">
        <TaskSelectorVector />
        <div className="absolute inset-[58.03%_0.1%_1.37%_0]" data-name="JAR">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9761 9.74445">
            <g id="JAR">
              <path d={svgPaths.p2d1df080} fill="var(--fill-0, #E25A1C)" id="Vector" />
              <path d={svgPaths.p323c0b00} fill="var(--fill-0, #E25A1C)" id="Vector_2" />
              <path d={svgPaths.p34df8380} fill="var(--fill-0, #E25A1C)" id="Vector_3" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (property1 === "HTTP Operator") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Property 1=HTTP Operator">
        <div className="absolute inset-[27.54%_0.2%_8.52%_0.86%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.7466 15.3458">
            <path d={svgPaths.p158c980} fill="var(--fill-0, #E6E6E6)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[9.25%_0.19%_70.54%_0.86%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.7482 4.85142">
            <path d={svgPaths.p1f15d400} fill="var(--fill-0, #A52FEE)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[15.77%_8.49%_77.12%_58.48%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.92605 1.70762">
            <path d={svgPaths.p31e01b00} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
        <div className="absolute bottom-1/4 left-[4.17%] right-[4.17%] top-[45.83%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 7">
            <path d={svgPaths.p2261ce00} fill="var(--fill-0, #324A5E)" id="Vector" />
          </svg>
        </div>
      </div>
    );
  }
  if (property1 === "Pyspark Cloud") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Property 1=Pyspark Cloud">
        <div className="absolute inset-[4.17%_0_2.49%_0]" data-name="Pyspark Yarn">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 22.4029">
            <g id="Pyspark Yarn">
              <path clipRule="evenodd" d={svgPaths.p2c366200} fill="var(--fill-0, #E25A1C)" fillRule="evenodd" id="Vector" />
              <g id="Py Spark">
                <path d={svgPaths.p125a8140} fill="var(--fill-0, #E25A1C)" id="Vector_2" />
                <path d={svgPaths.p3016e600} fill="var(--fill-0, #E25A1C)" id="Vector_3" />
                <path d={svgPaths.p236503c0} fill="var(--fill-0, #E25A1C)" id="Vector_4" />
                <path d={svgPaths.p3d459200} fill="var(--fill-0, #E25A1C)" id="Vector_5" />
                <path d={svgPaths.p2055bc00} fill="var(--fill-0, #E25A1C)" id="Vector_6" />
                <path d={svgPaths.p2ede3100} fill="var(--fill-0, #E25A1C)" id="Vector_7" />
                <path d={svgPaths.p1360e600} fill="var(--fill-0, #E25A1C)" id="Vector_8" />
              </g>
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (property1 === "Pyspark Yarn") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Property 1=Pyspark Yarn">
        <div className="absolute inset-[68.16%_4.17%_5.46%_4.17%]" data-name="YARN">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9995 6.33129">
            <g id="YARN">
              <path d={svgPaths.p7ea1da0} fill="var(--fill-0, #E25A1C)" id="Vector" />
              <path d={svgPaths.p3b0cc6f0} fill="var(--fill-0, #E25A1C)" id="Vector_2" />
              <path d={svgPaths.p1bc95380} fill="var(--fill-0, #E25A1C)" id="Vector_3" />
              <path d={svgPaths.p2cddf800} fill="var(--fill-0, #E25A1C)" id="Vector_4" />
            </g>
          </svg>
        </div>
        <TaskSelectorVector1 />
      </div>
    );
  }
  if (property1 === "Data Movement") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Property 1=Data Movement">
        <div className="absolute inset-[0_4.16%_-42.34%_4.17%]" data-name="Group">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 34.1621">
            <g id="Group">
              <path d={svgPaths.p1fdbcd00} fill="var(--fill-0, #669DF6)" id="Vector" />
              <path d={svgPaths.p35f4d200} fill="var(--fill-0, #669DF6)" id="Vector_2" />
              <path d={svgPaths.p7dd0500} fill="var(--fill-0, #4285F4)" id="Vector_3" />
              <path d={svgPaths.p8b8df00} fill="var(--fill-0, #4285F4)" id="Vector_4" />
              <g id="Vector_5" />
              <g id="a">
                <path d={svgPaths.p3a162c00} fill="var(--fill-0, #3A414A)" id="Vector_6" />
                <path d={svgPaths.p162cda80} fill="var(--fill-0, #3A414A)" id="Vector_7" />
                <path d={svgPaths.pa58b280} fill="var(--fill-0, #3A414A)" id="Vector_8" />
              </g>
              <g id="b">
                <path d={svgPaths.p14ca1f00} fill="var(--fill-0, #3A414A)" id="Vector_9" />
                <path d={svgPaths.p39290d30} fill="var(--fill-0, #3A414A)" id="Vector_10" />
              </g>
              <g id="c">
                <path d={svgPaths.p877dd00} fill="var(--fill-0, #3A414A)" id="Vector_11" />
                <path d={svgPaths.p10572cd0} fill="var(--fill-0, #3A414A)" id="Vector_12" />
                <path d={svgPaths.p15acec00} fill="var(--fill-0, #3A414A)" id="Vector_13" />
                <path d={svgPaths.p19728570} fill="var(--fill-0, #3A414A)" id="Vector_14" />
              </g>
            </g>
          </svg>
        </div>
        <div className="absolute flex inset-[54.17%_57.48%_4.32%_12.5%] items-center justify-center">
          <TaskSelectorHelper2 additionalClassNames="rotate-[-9.78deg]">
            <path d={svgPaths.p113cb640} fill="var(--fill-0, #AECBFA)" id="Vector" />
          </TaskSelectorHelper2>
        </div>
        <div className="absolute flex inset-[4.17%_11.65%_54.32%_58.33%] items-center justify-center">
          <TaskSelectorHelper2 additionalClassNames="rotate-[170.22deg]">
            <path d={svgPaths.p3e2aaa00} fill="var(--fill-0, #AECBFA)" id="Vector" />
          </TaskSelectorHelper2>
        </div>
      </div>
    );
  }
  if (property1 === "Dependency Check") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Property 1=Dependency Check">
        <div className="absolute inset-[3.11%_-0.01%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.0062 22.5055">
            <path d={svgPaths.p32ce7a80} fill="var(--fill-0, #5E9178)" id="Vector" />
          </svg>
        </div>
      </div>
    );
  }
  if (property1 === "Dependency Touch") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Property 1=Dependency Touch">
        <div className="absolute inset-[4.17%_20.83%_79.17%_58.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 4">
            <path d={svgPaths.p11c58280} fill="var(--fill-0, #F9BBB8)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[4.17%_20.83%_8.33%_12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 21">
            <path d={svgPaths.p23111380} fill="var(--fill-0, #F55E55)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[45.29%_10.87%_3.11%_43.71%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.9001 12.3841">
            <path d={svgPaths.p36cce200} fill="var(--fill-0, #FFDEAD)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[43.01%_9.21%_1.53%_42.03%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.7038 13.312">
            <path clipRule="evenodd" d={svgPaths.p32835340} fill="var(--fill-0, #3D3D63)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    );
  }
  if (property1 === "Rheos SQL") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Property 1=Rheos SQL">
        <div className="absolute bottom-0 left-0 right-0 top-1/4" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 18">
            <path d={svgPaths.p804ed00} fill="var(--fill-0, #F6B002)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[0_10%_0_0]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.6 24">
            <path d={svgPaths.p3fb4b400} fill="var(--fill-0, #FAC641)" id="Vector" />
          </svg>
        </div>
        <div className="absolute bottom-3/4 left-[15%] right-[32.5%] top-[10%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6 3.59993">
            <path d={svgPaths.pce2c400} fill="var(--fill-0, #FFEDB7)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[30%_32.5%_55%_15%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6 3.59993">
            <path d={svgPaths.p3b73a200} fill="var(--fill-0, #FFEDB7)" fillOpacity="0.6" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[54.17%_20.83%_12.5%_4.17%]" data-name="ROHES">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 8">
            <g id="ROHES">
              <path d={svgPaths.p8bdd480} fill="var(--fill-0, white)" id="Vector" />
              <path d={svgPaths.p23c1200} fill="var(--fill-0, white)" id="Vector_2" />
              <path d={svgPaths.p32209180} fill="var(--fill-0, white)" id="Vector_3" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (property1 === "pipeline") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Property 1=pipeline">
        <div className="absolute inset-0 overflow-clip" data-name="pipeline type">
          <div className="absolute inset-[16.72%_16.03%_15.54%_9.35%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9103 16.2585">
              <path d={svgPaths.p96fba00} fill="var(--fill-0, #60DAFF)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[10.99%_48.67%_70.67%_3.07%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5807 4.40123">
              <path d={svgPaths.p267a4a00} fill="var(--fill-0, #65BEE7)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[6.16%_48.67%_82.26%_3.07%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5807 2.77898">
              <path d={svgPaths.p83ded00} fill="var(--fill-0, #599CDA)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[8.04%_52.53%_84.32%_7.9%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.4958 1.83385">
              <path d={svgPaths.p34f3f000} fill="var(--fill-0, #C7C7C7)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[42.76%_8.99%_8.99%_72.67%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.40123 11.5815">
              <path d={svgPaths.p39dc4000} fill="var(--fill-0, #65BEE7)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[42.76%_4.17%_8.99%_84.25%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.77898 11.5815">
              <path d={svgPaths.p233d5900} fill="var(--fill-0, #599CDA)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[47.58%_6.04%_12.85%_86.32%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.83314 9.4958">
              <path d={svgPaths.p8b40960} fill="var(--fill-0, #C7C7C7)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (property1 === "Pilot") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Property 1=Pilot">
        <TaskSelectorVector1 />
        <div className="absolute inset-[66.96%_4.17%_6.3%_4.17%]" data-name="PILOT">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 6.41848">
            <g id="PILOT">
              <path d={svgPaths.p3df2700} fill="var(--fill-0, #E25A1C)" id="Vector" />
              <path d={svgPaths.pf2ff500} fill="var(--fill-0, #E25A1C)" id="Vector_2" />
              <path d={svgPaths.p928b800} fill="var(--fill-0, #E25A1C)" id="Vector_3" />
              <path d={svgPaths.p353f0800} fill="var(--fill-0, #E25A1C)" id="Vector_4" />
              <path d={svgPaths.p3daebf00} fill="var(--fill-0, #E25A1C)" id="Vector_5" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (property1 === "data quality") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Property 1=data quality">
        <div className="absolute inset-[4.17%_15.62%_3.67%_4.17%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2509 22.1202">
            <path d={svgPaths.p85063c0} fill="var(--fill-0, #C1D737)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[52.75%_4.97%_5.89%_53.68%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.92362 9.92624">
            <path d={svgPaths.p19ccea00} fill="var(--fill-0, #68770D)" id="Vector" />
          </svg>
        </div>
      </div>
    );
  }
  if (property1 === "ray job") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Property 1=ray job">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g clipPath="url(#clip0_166_2731)" id="Frame">
            <path clipRule="evenodd" d={svgPaths.p33477d80} fill="var(--fill-0, #479ED6)" fillRule="evenodd" id="Vector" />
            <path d={svgPaths.p39bb5d80} id="Vector_2" stroke="var(--stroke-0, #479ED6)" strokeWidth="0.7832" />
            <path d={svgPaths.p33ba8ce2} fill="var(--fill-0, #479ED6)" id="Vector_3" />
          </g>
          <defs>
            <clipPath id="clip0_166_2731">
              <rect fill="white" height="24" width="24" />
            </clipPath>
          </defs>
        </svg>
      </div>
    );
  }
  if (property1 === "Dint") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Property 1=Dint">
        <div className="absolute inset-[0_0_18.75%_18.75%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
            <path d={svgPaths.p2f3dd900} fill="var(--fill-0, #F0AE56)" id="Vector" opacity="0.2" />
          </svg>
        </div>
        <div className="absolute inset-[31.25%_12.5%_6.25%_0]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 15">
            <path d={svgPaths.p24838b00} fill="var(--fill-0, #F0AE56)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[12.5%_12.5%_65.63%_0]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 5.25">
            <path d={svgPaths.pb708e00} fill="var(--fill-0, #F0AE56)" id="Vector" opacity="0.3" />
          </svg>
        </div>
        <div className="absolute inset-[48.82%_20.83%_28.24%_6.12%]" data-name="DINT">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5321 5.50573">
            <g id="DINT">
              <path d={svgPaths.p1182ef00} fill="var(--fill-0, white)" id="Vector" />
              <path d={svgPaths.p389f3000} fill="var(--fill-0, white)" id="Vector_2" />
              <path d={svgPaths.p1f2c3880} fill="var(--fill-0, white)" id="Vector_3" />
              <path d={svgPaths.p250ac380} fill="var(--fill-0, white)" id="Vector_4" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (property1 === "Pipeline Initialization") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Property 1=Pipeline Initialization">
        <div className="absolute inset-[0_0_18.75%_18.75%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
            <path d={svgPaths.p2f3dd900} fill="var(--fill-0, #5D79B6)" id="Vector" opacity="0.2" />
          </svg>
        </div>
        <div className="absolute inset-[31.25%_12.5%_6.25%_0]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 15">
            <path d={svgPaths.p24838b00} fill="var(--fill-0, #5D79B6)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[12.5%_12.5%_65.63%_0]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 5.25">
            <path d={svgPaths.pb708e00} fill="var(--fill-0, #5D79B6)" id="Vector" opacity="0.3" />
          </svg>
        </div>
        <div className="absolute inset-[40.97%_29.53%_12.5%_13.49%]" data-name="Pipe Initial">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.6746 11.168">
            <g id="Pipe Initial">
              <path d={svgPaths.p339bff00} fill="var(--fill-0, white)" id="Vector" />
              <path d={svgPaths.p27ee7b80} fill="var(--fill-0, white)" id="Vector_2" />
              <path d={svgPaths.pa47ba00} fill="var(--fill-0, white)" id="Vector_3" />
              <path d={svgPaths.pf11f400} fill="var(--fill-0, white)" id="Vector_4" />
              <path d={svgPaths.p23fb0e00} fill="var(--fill-0, white)" id="Vector_5" />
              <path d={svgPaths.p1e70a280} fill="var(--fill-0, white)" id="Vector_6" />
              <path d={svgPaths.p2a029d80} fill="var(--fill-0, white)" id="Vector_7" />
              <path d={svgPaths.pae42e80} fill="var(--fill-0, white)" id="Vector_8" />
              <path d={svgPaths.p6554c00} fill="var(--fill-0, white)" id="Vector_9" />
              <path d={svgPaths.p22bf2800} fill="var(--fill-0, white)" id="Vector_10" />
              <path d={svgPaths.p31070100} fill="var(--fill-0, white)" id="Vector_11" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (property1 === "UOW Update") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Property 1=UOW Update">
        <div className="absolute inset-[0_0_18.75%_18.75%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
            <path d={svgPaths.p2f3dd900} fill="var(--fill-0, #AE59B7)" id="Vector" opacity="0.2" />
          </svg>
        </div>
        <div className="absolute inset-[31.25%_12.5%_6.25%_0]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 15">
            <path d={svgPaths.p24838b00} fill="var(--fill-0, #AE59B7)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[67.77%_20.83%_13.54%_8.33%]" data-name="Update">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 4.48701">
            <g id="Update">
              <path d={svgPaths.p3d6e0c00} fill="var(--fill-0, white)" id="Vector" />
              <path d={svgPaths.p1f401400} fill="var(--fill-0, white)" id="Vector_2" />
              <path d={svgPaths.p2f740300} fill="var(--fill-0, white)" id="Vector_3" />
              <path d={svgPaths.p3a712600} fill="var(--fill-0, white)" id="Vector_4" />
              <path d={svgPaths.p2a07ef00} fill="var(--fill-0, white)" id="Vector_5" />
              <path d={svgPaths.p3bd74400} fill="var(--fill-0, white)" id="Vector_6" />
            </g>
          </svg>
        </div>
        <div className="absolute inset-[12.5%_12.5%_65.63%_0]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 5.25">
            <path d={svgPaths.pb708e00} fill="var(--fill-0, #AE59B7)" id="Vector" opacity="0.3" />
          </svg>
        </div>
        <div className="absolute inset-[41.67%_25.63%_39.52%_14.09%]" data-name="UOW Setup">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4671 4.51588">
            <g id="UOW Setup">
              <path d={svgPaths.pa475500} fill="var(--fill-0, white)" id="Vector" />
              <path d={svgPaths.p3f651fc0} fill="var(--fill-0, white)" id="Vector_2" />
              <path d={svgPaths.p351d5b00} fill="var(--fill-0, white)" id="Vector_3" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (property1 === "Data Retention") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Property 1=Data Retention">
        <div className="absolute inset-[0_4.17%_0_0]" data-name="mode_icon_retentionCreate_hover 1">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 24">
            <g clipPath="url(#clip0_166_2773)" id="mode_icon_retentionCreate_hover 1">
              <path d={svgPaths.p1cd16d80} fill="var(--fill-0, #0056CA)" id="Vector" />
              <path d={svgPaths.p3bc96280} fill="var(--fill-0, #0056CA)" id="Vector_2" />
              <path d={svgPaths.p38464040} fill="var(--fill-0, #0E73FF)" id="Vector_3" />
              <path d={svgPaths.p3c607200} fill="var(--fill-0, #0E73FF)" id="Vector_4" />
              <path d={svgPaths.p11918e00} fill="var(--fill-0, #0056CA)" id="Vector_5" />
              <path d={svgPaths.p1ad66f00} fill="var(--fill-0, #0E73FF)" id="Vector_6" />
            </g>
            <defs>
              <clipPath id="clip0_166_2773">
                <rect fill="white" height="24" width="23" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    );
  }
  if (property1 === "oracle") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Property 1=oracle">
        <TaskSelectorHelper1>
          <path d={svgPaths.p31f2b400} fill="var(--fill-0, #CB8686)" id="Vector" />
          <path d={svgPaths.p18134600} fill="var(--fill-0, #805555)" id="Vector_2" />
          <path d={svgPaths.p35299380} fill="var(--fill-0, #4F3838)" id="Vector_3" />
          <path d={svgPaths.p3d3c5500} fill="var(--fill-0, #1A1414)" id="Vector_4" />
          <path d={svgPaths.p590c600} fill="var(--fill-0, #E19191)" id="Vector_5" />
          <path clipRule="evenodd" d={svgPaths.p11330e00} fill="var(--fill-0, #FF0000)" fillRule="evenodd" id="Vector_6" />
        </TaskSelectorHelper1>
      </div>
    );
  }
  if (property1 === "Governed Ods") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Property 1=Governed Ods">
        <TaskSelectorHelper1>
          <path d={svgPaths.p31f2b400} fill="var(--fill-0, #86CB87)" id="Vector" />
          <path d={svgPaths.p18134600} fill="var(--fill-0, #5E8055)" id="Vector_2" />
          <path d={svgPaths.p22340c00} fill="var(--fill-0, #3B4F38)" id="Vector_3" />
          <path d={svgPaths.p2821140} fill="var(--fill-0, #141A16)" id="Vector_4" />
          <path d={svgPaths.p590c600} fill="var(--fill-0, #96E191)" id="Vector_5" />
          <path d={svgPaths.p3178c480} fill="var(--fill-0, #15BC83)" id="Vector_6" />
        </TaskSelectorHelper1>
      </div>
    );
  }
  if (property1 === "ZeroETL") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Property 1=ZeroETL">
        <div className="absolute inset-[-0.01%_0_-42.34%_0]" data-name="Group">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.0001 34.1644">
            <g id="Group">
              <path d={svgPaths.p9fc25f0} fill="var(--fill-0, #AECBFA)" id="Vector" />
              <path d={svgPaths.p287b4280} fill="var(--fill-0, #669DF6)" id="Vector_2" />
              <path d={svgPaths.p2a702880} fill="var(--fill-0, #4285F4)" id="Vector_3" />
              <g id="Vector_4" />
              <g id="a">
                <path d={svgPaths.p3fdd3b50} fill="var(--fill-0, #3A414A)" id="Vector_5" />
                <path d={svgPaths.p3c8efb00} fill="var(--fill-0, #3A414A)" id="Vector_6" />
                <path d={svgPaths.p32b51950} fill="var(--fill-0, #3A414A)" id="Vector_7" />
              </g>
              <g id="b">
                <path d={svgPaths.p2dcc1d80} fill="var(--fill-0, #3A414A)" id="Vector_8" />
                <path d={svgPaths.p1e5e9000} fill="var(--fill-0, #3A414A)" id="Vector_9" />
              </g>
              <g id="c">
                <path d={svgPaths.p8824180} fill="var(--fill-0, #3A414A)" id="Vector_10" />
                <path d={svgPaths.p17e7c240} fill="var(--fill-0, #3A414A)" id="Vector_11" />
                <path d={svgPaths.p2618f500} fill="var(--fill-0, #3A414A)" id="Vector_12" />
                <path d={svgPaths.p63fb000} fill="var(--fill-0, #3A414A)" id="Vector_13" />
              </g>
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (property1 === "Variable") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Property 1=Variable">
        <div className="absolute inset-[6.25%_18.76%_6.25%_18.74%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 21">
            <path d={svgPaths.p17a46200} fill="var(--fill-0, #13C2C2)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[45.34%_15.64%_17.16%_15.63%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.497 9">
            <path d={svgPaths.p14f73700} fill="var(--fill-0, #0E9393)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[6.25%_18.76%_65.99%_51.91%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.041 6.6615">
            <path d={svgPaths.p6fc8700} fill="var(--fill-0, #8AE6E6)" id="Vector" />
          </svg>
        </div>
      </div>
    );
  }
  if (property1 === "icn-FlinkJar (1)") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Property 1=icn-FlinkJar (1)">
        <div className="absolute inset-[7.5%_4.17%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 20.3988">
            <g id="Group 427318826">
              <path d={svgPaths.p2dcc0600} fill="var(--fill-0, #FFCEE8)" fillOpacity="0.3" id="Vector" />
              <g id="Vector_2">
                <path d={svgPaths.p2c597000} fill="var(--fill-0, #E04D9D)" />
                <path d={svgPaths.p252f2d00} fill="var(--fill-0, #E04D9D)" />
              </g>
              <g id="Group 427318825">
                <path d={svgPaths.p187c3100} fill="var(--fill-0, #E04D9D)" id="Vector_3" />
                <path d={svgPaths.p2df090c0} fill="var(--fill-0, #E04D9D)" id="Vector_4" />
                <path d={svgPaths.p21f2d680} fill="var(--fill-0, #E04D9D)" id="Vector_5" />
              </g>
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (property1 === "if else 1") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Property 1=if else 1">
        <div className="absolute inset-[0_39.03%_7.17%_17.01%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.551 22.2791">
            <path d={svgPaths.p25679000} fill="var(--fill-0, #C1C1C1)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[14.2%_-0.06%_0_0]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.0127 20.591">
            <path d={svgPaths.p38b83800} fill="var(--fill-0, #6981F8)" id="Vector" />
          </svg>
        </div>
      </div>
    );
  }
  if (property1 === "datacopy") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Property 1=datacopy">
        <div className="flex flex-col items-end size-full">
          <div className="content-stretch flex flex-col items-end pb-[10.414px] relative size-full">
            <div className="aspect-[24/24] mb-[-10.414px] overflow-clip relative shrink-0 w-full" data-name="pipeline type">
              <div className="absolute inset-[12.5%_6.25%_14.59%_6.25%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5001 14.5829">
                  <path d={svgPaths.p31ba0100} fill="var(--fill-0, #3567D4)" id="Vector" />
                </svg>
              </div>
              <div className="absolute flex inset-[47.5%_6.24%_12.5%_58.76%] items-center justify-center">
                <div className="flex-none h-[8px] rotate-180 w-[7px]">
                  <div className="relative size-full" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 8">
                      <path d={svgPaths.p3aec1c00} fill="var(--fill-0, #9747FF)" id="Vector" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <TaskSelectorHelper />
          </div>
        </div>
      </div>
    );
  }
  if (property1 === "data pull") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Property 1=data pull">
        <div className="flex flex-col items-end size-full">
          <div className="content-stretch flex flex-col items-end pb-[10.414px] relative size-full">
            <div className="aspect-[23/23] mb-[-10.414px] overflow-clip relative shrink-0 w-full" data-name="pipeline type">
              <div className="absolute inset-[23.96%_62.21%_67.71%_17.44%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.07011 1.66714">
                  <path d={svgPaths.pa2e2800} fill="var(--fill-0, #FF7500)" id="Vector" />
                </svg>
              </div>
              <div className="absolute inset-[12.5%_6.25%_14.59%_6.25%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5001 14.5829">
                  <path d={svgPaths.p31ba0100} fill="var(--fill-0, #7ED564)" id="Vector" />
                </svg>
              </div>
              <div className="absolute inset-[47.5%_6.24%_12.5%_58.76%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 8">
                  <path d={svgPaths.p35718f00} fill="var(--fill-0, #00CDEE)" id="Vector" />
                </svg>
              </div>
            </div>
            <TaskSelectorHelper />
          </div>
        </div>
      </div>
    );
  }
  if (property1 === "RDBMS 1") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Property 1=RDBMS 1">
        <div className="absolute inset-[2.5%_9.64%_30.79%_1.61%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.3 16.0114">
            <path d={svgPaths.p3dffb470} fill="var(--fill-0, #4D94FF)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[15.31%_10%_16.81%_1.61%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.213 16.2915">
            <path d={svgPaths.p39b6f400} fill="var(--fill-0, #4D94FF)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[79.44%_40.6%_0.2%_1.61%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8694 4.88581">
            <path d={svgPaths.p60f8000} fill="var(--fill-0, #4D94FF)" id="Vector" />
          </svg>
        </div>
        <div className="absolute bottom-[12.5%] left-1/4 right-[3.16%] top-[71.87%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.2417 3.7502">
            <path d={svgPaths.p6631900} fill="var(--fill-0, #4D94FF)" id="Vector" />
          </svg>
        </div>
      </div>
    );
  }
  return (
    <div className={className || "relative size-[24px]"} data-name="Property 1=Batch Inference">
      <div className="absolute inset-[23.86%_1.14%_3.41%_1.14%]" data-name="Layer">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.4545 17.4545">
          <g id="Layer">
            <path d={svgPaths.p34a28950} fill="var(--fill-0, #3778C6)" id="Vector" />
            <path d={svgPaths.p33da4d70} fill="var(--fill-0, #134C89)" id="Vector_2" />
            <path d={svgPaths.p22c3a00} fill="var(--fill-0, #3778C6)" id="Vector_3" />
          </g>
        </svg>
      </div>
      <div className="absolute inset-[1.46%_16.67%_31.76%_17.8%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.729 16.0258">
          <path d={svgPaths.p3dbc5a00} fill="var(--fill-0, #BEDAEF)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[15.06%_29.03%_44.13%_30.17%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.79356 9.79356">
          <path d={svgPaths.p3bc5ee40} fill="var(--fill-0, #9DBACD)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[24.96%_38.92%_54.02%_40.06%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.04517 5.04517">
          <path d={svgPaths.p1a249b00} fill="var(--fill-0, #BEDAEF)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

export { TaskSelector };

export default function ToolBar() {
  return (
    <div className="bg-white relative rounded-[16px] size-full" data-name="tool bar">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Tab Container">
          <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Tab Items">
            <div className="flex flex-col items-center size-full">
              <div className="content-stretch flex flex-col items-center relative w-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center pb-[13px] pt-[15px] px-[16px] relative shrink-0" data-name="Text">
                  <p className="font-['Market_Sans:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#191919] text-[14px]">Task</p>
                </div>
                <div className="h-[2px] relative shrink-0 w-full" data-name="Line">
                  <div className="absolute bg-[#191919] inset-0" data-name="line" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Tab Items">
            <div className="flex flex-col items-center justify-center size-full">
              <div className="content-stretch flex flex-col items-center justify-center relative w-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[15px] relative shrink-0" data-name="Text">
                  <p className="font-['Market_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#707070] text-[14px]">Node Tree</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative shrink-0 w-full" data-name="Container">
          <div className="content-stretch flex flex-col items-start p-[4px] relative w-full">
            <div className="bg-[#f7f7f7] relative rounded-[8px] shrink-0 w-full" data-name="field">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[6px] relative w-full">
                  <div className="relative shrink-0 size-[16px]" data-name="lead icon">
                    <div className="absolute inset-[6.25%]" data-name="vector-shape">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0002 14.0002">
                        <path d={svgPaths.p16e29b00} fill="var(--fill-0, #707070)" id="vector-shape" />
                      </svg>
                    </div>
                  </div>
                  <p className="flex-[1_0_0] font-['Market_Sans:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic overflow-hidden relative text-[#c7c7c7] text-[14px] text-ellipsis whitespace-nowrap">Search</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-x-clip overflow-y-auto relative w-full" data-name="Container">
          <div className="relative shrink-0 w-[260px]" data-name="Tree View">
            <div className="flex flex-col justify-center size-full">
              <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[7px] relative w-full">
                <ContentText text="Transform" />
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pb-[16px] px-[8px] relative shrink-0 w-[264px]" data-name="Container">
            <Wrapper additionalClassNames="shrink-0 w-full">
              <div className="bg-[#f5f8fa] content-stretch flex items-center justify-center overflow-clip relative rounded-[4px] shrink-0 size-[16px]">
                <TaskSelector className="flex-[1_0_0] h-full min-h-px min-w-px overflow-clip relative" />
              </div>
              <div className="flex flex-[1_0_0] flex-col font-['Market_Sans:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#525252] text-[12px]">
                <p className="leading-[16px] whitespace-pre-wrap">Batch Inference</p>
              </div>
            </Wrapper>
            <Wrapper additionalClassNames="shrink-0 w-full">
              <div className="bg-[#f5f8fa] content-stretch flex items-center justify-center overflow-clip relative rounded-[4px] shrink-0 size-[16px]">
                <TaskSelector className="flex-[1_0_0] h-full min-h-px min-w-px overflow-clip relative" property1="Spark SQL" />
              </div>
              <div className="flex flex-[1_0_0] flex-col font-['Market_Sans:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#525252] text-[12px]">
                <p className="leading-[16px] whitespace-pre-wrap">Spark SQL</p>
              </div>
            </Wrapper>
            <Wrapper additionalClassNames="shrink-0 w-full">
              <div className="bg-[#f5f8fa] content-stretch flex items-center justify-center overflow-clip relative rounded-[4px] shrink-0 size-[16px]">
                <TaskSelector className="flex-[1_0_0] h-full min-h-px min-w-px overflow-clip relative" property1="Shell Script" />
              </div>
              <div className="flex flex-[1_0_0] flex-col font-['Market_Sans:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#525252] text-[12px]">
                <p className="leading-[16px] whitespace-pre-wrap">Shell Script</p>
              </div>
            </Wrapper>
            <Wrapper additionalClassNames="shrink-0 w-full">
              <div className="bg-[#f5f8fa] content-stretch flex items-center justify-center overflow-clip relative rounded-[4px] shrink-0 size-[16px]">
                <TaskSelector className="flex-[1_0_0] h-full min-h-px min-w-px overflow-clip relative" property1="Spark Jar" />
              </div>
              <div className="flex flex-col font-['Market_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[12px] w-[85px]">
                <p className="leading-[16px] whitespace-pre-wrap">Spark Jar</p>
              </div>
            </Wrapper>
            <Wrapper additionalClassNames="shrink-0 w-full">
              <div className="bg-[#f5f8fa] content-stretch flex items-center justify-center overflow-clip relative rounded-[4px] shrink-0 size-[16px]">
                <TaskSelector className="flex-[1_0_0] h-full min-h-px min-w-px overflow-clip relative" property1="Pyspark Cloud" />
              </div>
              <div className="flex flex-[1_0_0] flex-col font-['Market_Sans:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#525252] text-[12px]">
                <p className="leading-[16px] whitespace-pre-wrap">Pyspark Cloud (Pilot)</p>
              </div>
            </Wrapper>
            <Wrapper additionalClassNames="shrink-0 w-full">
              <div className="bg-[#f5f8fa] content-stretch flex items-center justify-center overflow-clip relative rounded-[4px] shrink-0 size-[16px]">
                <TaskSelector className="flex-[1_0_0] h-full min-h-px min-w-px overflow-clip relative" property1="Pyspark Yarn" />
              </div>
              <div className="flex flex-col font-['Market_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[12px] w-[85px]">
                <p className="leading-[16px] whitespace-pre-wrap">Pyspark Yarn</p>
              </div>
            </Wrapper>
            <Wrapper additionalClassNames="shrink-0 w-full">
              <div className="bg-[#f5f8fa] content-stretch flex items-center justify-center overflow-clip relative rounded-[4px] shrink-0 size-[16px]">
                <TaskSelector className="flex-[1_0_0] h-full min-h-px min-w-px overflow-clip relative" property1="pipeline" />
              </div>
              <div className="flex flex-[1_0_0] flex-col font-['Market_Sans:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#525252] text-[12px]">
                <p className="leading-[16px] whitespace-pre-wrap">Pipeline Template</p>
              </div>
            </Wrapper>
            <Wrapper additionalClassNames="shrink-0 w-full">
              <div className="bg-[#f5f8fa] content-stretch flex items-center justify-center overflow-clip relative rounded-[4px] shrink-0 size-[16px]">
                <TaskSelector className="flex-[1_0_0] h-full min-h-px min-w-px overflow-clip relative" property1="data quality" />
              </div>
              <div className="flex flex-col font-['Market_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[12px] w-[85px]">
                <p className="leading-[16px] whitespace-pre-wrap">Data quality</p>
              </div>
            </Wrapper>
            <Wrapper additionalClassNames="shrink-0 w-full">
              <div className="bg-[#f5f8fa] content-stretch flex items-center justify-center overflow-clip relative rounded-[4px] shrink-0 size-[16px]">
                <TaskSelector className="flex-[1_0_0] h-full min-h-px min-w-px overflow-clip relative" property1="Rheos SQL" />
              </div>
              <div className="flex flex-col font-['Market_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[12px] w-[85px]">
                <p className="leading-[16px] whitespace-pre-wrap">Rheos SQL</p>
              </div>
            </Wrapper>
            <Wrapper additionalClassNames="shrink-0 w-full">
              <div className="bg-[#f5f8fa] content-stretch flex items-center justify-center overflow-clip relative rounded-[4px] shrink-0 size-[16px]">
                <TaskSelector className="flex-[1_0_0] h-full min-h-px min-w-px overflow-clip relative" property1="icn-FlinkJar (1)" />
              </div>
              <div className="flex flex-col font-['Market_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#525252] text-[12px] w-[85px]">
                <p className="leading-[16px] whitespace-pre-wrap">Flink Jar</p>
              </div>
            </Wrapper>
          </div>
          <TreeView>
            <ContentText text="Data Movement" />
          </TreeView>
          <div className="relative shrink-0 w-full" data-name="Container">
            <div className="content-start flex flex-wrap gap-0 items-start pb-[16px] px-[8px] relative w-full">
              <Wrapper additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
                <div className="bg-[#f5f8fa] content-stretch flex items-center justify-center overflow-clip relative rounded-[4px] shrink-0 size-[16px]">
                  <TaskSelector className="flex-[1_0_0] h-full min-h-px min-w-px overflow-clip relative" property1="Data Movement" />
                </div>
                <div className="flex flex-[1_0_0] flex-col font-['Market_Sans:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#525252] text-[12px] tracking-[0.4px]">
                  <p className="leading-[16px] whitespace-pre-wrap">Data Movement</p>
                </div>
              </Wrapper>
            </div>
          </div>
          <TreeView>
            <ContentText1 text="Control Flow" />
          </TreeView>
          <div className="relative shrink-0 w-full" data-name="Container">
            <div className="content-stretch flex flex-col items-start pb-[16px] px-[8px] relative w-full">
              <Wrapper additionalClassNames="shrink-0 w-full">
                <div className="bg-[#f5f8fa] content-stretch flex items-center justify-center overflow-clip relative rounded-[4px] shrink-0 size-[16px]">
                  <TaskSelector className="flex-[1_0_0] h-full min-h-px min-w-px overflow-clip relative" property1="Dependency Check" />
                </div>
                <div className="flex flex-[1_0_0] flex-col font-['Market_Sans:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#525252] text-[12px] tracking-[0.4px]">
                  <p className="leading-[16px] whitespace-pre-wrap">Dependency Check</p>
                </div>
              </Wrapper>
              <Wrapper additionalClassNames="shrink-0 w-full">
                <div className="bg-[#f5f8fa] content-stretch flex items-center justify-center overflow-clip relative rounded-[4px] shrink-0 size-[16px]">
                  <div className="flex-[1_0_0] h-full min-h-px min-w-px overflow-clip relative" data-name="task selector">
                    <div className="absolute inset-[4.17%_20.83%_79.17%_58.33%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 2.66667">
                        <path d={svgPaths.p38dcc00} fill="var(--fill-0, #F9BBB8)" id="Vector" />
                      </svg>
                    </div>
                    <div className="absolute inset-[4.17%_20.83%_8.33%_12.5%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 14">
                        <path d={svgPaths.p2bd84e00} fill="var(--fill-0, #F55E55)" id="Vector" />
                      </svg>
                    </div>
                    <div className="absolute inset-[45.29%_10.87%_3.11%_43.71%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.26673 8.2561">
                        <path d={svgPaths.p3d21870} fill="var(--fill-0, #FFDEAD)" id="Vector" />
                      </svg>
                    </div>
                    <div className="absolute inset-[43.01%_9.21%_1.53%_42.03%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.80253 8.87467">
                        <path clipRule="evenodd" d={svgPaths.p1f8c9980} fill="var(--fill-0, #3D3D63)" fillRule="evenodd" id="Vector" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-[1_0_0] flex-col font-['Market_Sans:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#525252] text-[12px] tracking-[0.4px]">
                  <p className="leading-[16px] whitespace-pre-wrap">Dependency Touch</p>
                </div>
              </Wrapper>
              <Wrapper additionalClassNames="shrink-0 w-full">
                <div className="bg-[#f5f8fa] content-stretch flex items-center justify-center overflow-clip relative rounded-[4px] shrink-0 size-[16px]">
                  <TaskSelector className="flex-[1_0_0] h-full min-h-px min-w-px overflow-clip relative" property1="Variable" />
                </div>
                <div className="flex flex-[1_0_0] flex-col font-['Market_Sans:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#525252] text-[12px]">
                  <p className="leading-[16px] whitespace-pre-wrap">Variable Initialization</p>
                </div>
              </Wrapper>
            </div>
          </div>
          <TreeView>
            <ContentText1 text="AI Operator" />
          </TreeView>
          <Wrapper1 additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
            <div className="bg-[#f5f8fa] content-stretch flex items-center justify-center overflow-clip relative rounded-[4px] shrink-0 size-[16px]">
              <TaskSelector className="flex-[1_0_0] h-full min-h-px min-w-px overflow-clip relative" property1="ray job" />
            </div>
            <div className="flex flex-[1_0_0] flex-col font-['Market_Sans:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#525252] text-[12px]">
              <p className="leading-[16px] whitespace-pre-wrap">Ray Job</p>
            </div>
          </Wrapper1>
          <TreeView>
            <ContentText1 text="Data Ops" />
          </TreeView>
          <Wrapper1 additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
            <div className="bg-[#f5f8fa] content-stretch flex items-center justify-center overflow-clip relative rounded-[4px] shrink-0 size-[16px]">
              <TaskSelector className="flex-[1_0_0] h-full min-h-px min-w-px overflow-clip relative" property1="Data Retention" />
            </div>
            <div className="flex flex-[1_0_0] flex-col font-['Market_Sans:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#525252] text-[12px]">
              <p className="leading-[16px] whitespace-pre-wrap">Data Retention</p>
            </div>
          </Wrapper1>
          <TreeView>
            <ContentText1 text="Legacy Pipeline Operator" />
          </TreeView>
          <div className="relative shrink-0 w-full" data-name="Container">
            <div className="content-stretch flex flex-col items-start pb-[16px] px-[8px] relative w-full">
              <Wrapper additionalClassNames="shrink-0 w-full">
                <div className="bg-[#f5f8fa] content-stretch flex items-center justify-center overflow-clip relative rounded-[4px] shrink-0 size-[16px]">
                  <TaskSelector className="flex-[1_0_0] h-full min-h-px min-w-px overflow-clip relative" property1="Dint" />
                </div>
                <div className="flex flex-[1_0_0] flex-col font-['Market_Sans:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#525252] text-[12px]">
                  <p className="leading-[16px] whitespace-pre-wrap">DINT Operator</p>
                </div>
              </Wrapper>
              <Wrapper additionalClassNames="shrink-0 w-full">
                <div className="bg-[#f5f8fa] content-stretch flex items-center justify-center overflow-clip relative rounded-[4px] shrink-0 size-[16px]">
                  <TaskSelector className="flex-[1_0_0] h-full min-h-px min-w-px overflow-clip relative" property1="Pipeline Initialization" />
                </div>
                <div className="flex flex-[1_0_0] flex-col font-['Market_Sans:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#525252] text-[12px]">
                  <p className="leading-[16px] whitespace-pre-wrap">Pipeline Initialization</p>
                </div>
              </Wrapper>
              <Wrapper additionalClassNames="shrink-0 w-full">
                <div className="bg-[#f5f8fa] content-stretch flex items-center justify-center overflow-clip relative rounded-[4px] shrink-0 size-[16px]">
                  <TaskSelector className="flex-[1_0_0] h-full min-h-px min-w-px overflow-clip relative" property1="UOW Update" />
                </div>
                <div className="flex flex-[1_0_0] flex-col font-['Market_Sans:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#525252] text-[12px]">
                  <p className="leading-[16px] whitespace-pre-wrap">UOW Update</p>
                </div>
              </Wrapper>
            </div>
          </div>
          <TreeView>
            <ContentText1 text="Logic" />
          </TreeView>
          <Wrapper1 additionalClassNames="shrink-0 w-[121px]">
            <div className="bg-[#f5f8fa] content-stretch flex items-center justify-center overflow-clip relative rounded-[4px] shrink-0 size-[16px]">
              <TaskSelector className="flex-[1_0_0] h-full min-h-px min-w-px overflow-clip relative" property1="if else 1" />
            </div>
            <div className="flex flex-[1_0_0] flex-col font-['Market_Sans:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#525252] text-[12px]">
              <p className="leading-[16px] whitespace-pre-wrap">IF/ELSE</p>
            </div>
          </Wrapper1>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-[-0.5px] pointer-events-none rounded-[16.5px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.07)]" />
    </div>
  );
}