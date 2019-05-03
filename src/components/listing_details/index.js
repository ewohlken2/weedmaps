import React from "react";
import Avatar from "../avatar";
import styled from "styled-components";
import get from "lodash.get";

const DetailsWrapper = styled.div`
  width: 90vw;
  max-width: 600px;
  height: auto;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ListingDetails = ({ listing }) => (
  <DetailsWrapper>
    <Avatar img={`${get(listing, "avatar_image.small_url")}`} />
    <div> {listing.name} </div>
    <div> {listing.city} </div>
    <div> {listing.rating} </div>
  </DetailsWrapper>
);

export default ListingDetails;
