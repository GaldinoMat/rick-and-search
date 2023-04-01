import React from "react";
import styled from "styled-components";

const BioText = styled.p`
  font-size: inherit;
  font-weight: 400;
  line-height: 1.75;
  margin: 0 0 24px;
  overflow-wrap: break-word;
`;

const BioTitle = styled.p`
  font-size: 24px;
  overflow: hidden;
  padding: 6px 0;
  line-height: 1.25;
  margin: 18px 0 9px;
  overflow-wrap: break-word;
  font-weight: 700;
`;

function CharacterText() {
  return (
    <div>
      <div>
        <BioText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          aliquet risus libero, sit amet dignissim diam euismod a. In eu
          dignissim sapien, in rhoncus erat.
        </BioText>
      </div>
      <div>
        <BioTitle>Biography</BioTitle>
        <BioText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porta
          nec velit sit amet maximus. Aliquam posuere facilisis ornare. Donec
          pulvinar urna quis tellus convallis fringilla. Nulla a dolor id mi
          ornare sollicitudin. Donec imperdiet elit eu justo maximus interdum.
          Morbi pharetra tempus scelerisque. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae;
        </BioText>
      </div>
      <div>
        <BioTitle>History</BioTitle>
        <BioText>
          Nullam sit amet quam vitae lorem varius laoreet vel at massa. Maecenas
          augue augue, posuere non quam non, venenatis porta lacus. Integer
          dolor nibh, malesuada porta lorem sed, vestibulum faucibus lorem.
          Quisque malesuada nunc vel diam suscipit, ut egestas ex vulputate.
          Pellentesque vel nisl ac lectus suscipit mollis eu vel est.
          Suspendisse feugiat sagittis nibh non gravida. Aliquam tristique
          sapien sed nunc suscipit ullamcorper. Vivamus ut tincidunt est.
          Integer eu tellus et libero mattis faucibus. Fusce id sem in orci
          mollis lacinia ac eget tortor. Quisque vel elementum tellus. Ut
          faucibus libero sit amet lectus blandit pulvinar. Praesent quis tempus
          enim. Cras condimentum nec leo vel luctus. Sed vestibulum gravida
          orci. Suspendisse tincidunt ornare sem.
        </BioText>
        <BioText>
          Nullam sit amet quam vitae lorem varius laoreet vel at massa. Maecenas
          augue augue, posuere non quam non, venenatis porta lacus. Integer
          dolor nibh, malesuada porta lorem sed, vestibulum faucibus lorem.
          Quisque malesuada nunc vel diam suscipit, ut egestas ex vulputate.
          Pellentesque vel nisl ac lectus suscipit mollis eu vel est.
          Suspendisse feugiat sagittis nibh non gravida. Aliquam tristique
          sapien sed nunc suscipit ullamcorper. Vivamus ut tincidunt est.
          Integer eu tellus et libero mattis faucibus. Fusce id sem in orci
          mollis lacinia ac eget tortor. Quisque vel elementum tellus. Ut
          faucibus libero sit amet lectus blandit pulvinar. Praesent quis tempus
          enim. Cras condimentum nec leo vel luctus. Sed vestibulum gravida
          orci. Suspendisse tincidunt ornare sem.
        </BioText>
      </div>
    </div>
  );
}

export default CharacterText;
