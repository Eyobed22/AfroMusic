import React, { useEffect } from "react";
import Table from "../../../Table";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../store/reducers";
import * as actions from "../../../../../store/actions";

const GeneralStat = () => {
  const dispatch = useDispatch();
  const statCount = useSelector((state: RootState) => state.statCount);

  useEffect(() => {
    dispatch(actions.readAllStatCount());
  }, [dispatch]);
  console.log("Stat Count: ", statCount);

  if (statCount.length === 0) {
    return null; 
  }

  const data = Object.entries(statCount[0]).map(([item, count]) => [
    item,
    count,
  ]);

  return (
    <div>
      <Table headers={["Item", "Count"]} data={data} />
    </div>
  );
};

export default GeneralStat;
