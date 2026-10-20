import clsx from "clsx";
type ParagraphTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ParagraphText({ text, additionalClassNames = "" }: ParagraphTextProps) {
  return (
    <div className={clsx("absolute h-[23.999px] left-0 top-[28px]", additionalClassNames)}>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#252525] text-[16px] top-[-0.73px] tracking-[-0.3125px]">{text}</p>
    </div>
  );
}
type TextTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TextText({ text, additionalClassNames = "" }: TextTextProps) {
  return (
    <div className={clsx("absolute content-stretch flex h-[18.636px] items-start left-0 top-[2.27px]", additionalClassNames)}>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#717182] text-[16px] tracking-[-0.3125px]">{text}</p>
    </div>
  );
}

export default function CatalogResourceDetailPage() {
  return (
    <div className="relative size-full" data-name="CatalogResourceDetailPage">
      <div className="absolute h-[51.996px] left-0 top-0 w-[569.73px]" data-name="Container">
        <TextText text="Resource Type" additionalClassNames="w-[107.635px]" />
        <ParagraphText text="Model" additionalClassNames="w-[569.73px]" />
      </div>
      <div className="absolute h-[51.996px] left-[585.72px] top-0 w-[569.737px]" data-name="Container">
        <TextText text="Category" additionalClassNames="w-[66.683px]" />
        <ParagraphText text="AI" additionalClassNames="w-[569.737px]" />
      </div>
      <div className="absolute h-[51.996px] left-0 top-[67.99px] w-[569.73px]" data-name="Container">
        <TextText text="Domain" additionalClassNames="w-[55.249px]" />
        <div className="absolute h-[23.999px] left-0 top-[28px] w-[569.73px]" data-name="Paragraph">
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#252525] text-[16px] top-[-0.73px] tracking-[-0.3125px]">{`Search & SEO`}</p>
        </div>
      </div>
      <div className="absolute h-[51.996px] left-[585.72px] top-[67.99px] w-[569.737px]" data-name="Container">
        <TextText text="Status" additionalClassNames="w-[46.484px]" />
        <div className="absolute content-stretch flex gap-[7.997px] h-[23.999px] items-center left-0 top-[28px] w-[569.737px]" data-name="Container">
          <div className="bg-[#00c950] rounded-[15252000px] shrink-0 size-[7.997px]" data-name="Container" />
          <div className="h-[23.999px] relative shrink-0 w-[44.815px]" data-name="Text">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <p className="absolute capitalize font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#252525] text-[16px] top-[-0.73px] tracking-[-0.3125px]">active</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[51.996px] left-0 top-[135.98px] w-[569.73px]" data-name="Container">
        <TextText text="Version" additionalClassNames="w-[54.013px]" />
        <ParagraphText text="v2.1.0" additionalClassNames="w-[569.73px]" />
      </div>
      <div className="absolute h-[51.996px] left-[585.72px] top-[135.98px] w-[569.737px]" data-name="Container">
        <TextText text="Environment" additionalClassNames="w-[90.604px]" />
        <ParagraphText text="production" additionalClassNames="w-[569.737px]" />
      </div>
    </div>
  );
}