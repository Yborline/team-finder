import Filter from "@components/widgets/Filter/Filter";
import ListPlayers from "@components/widgets/ListPlayers/ListPlayers";
import styles from "./TeamList.module.scss";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@interfaces/redux";
import postsOperations from "@redux/posts/posts-operations";
import { getAllFilterPosts } from "@redux/posts/posts-selector";
import ReactPaginate from "react-paginate";
// import { resetFilter } from "@redux/posts/posts-slice";

const ITEMS_PER_PAGE = 5;

const TeamList = () => {
  const dispatch = useAppDispatch();
  const posts = useSelector(getAllFilterPosts);
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected);
  };

  const paginatedPosts = posts.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  useEffect(() => {
    dispatch(postsOperations.getPosts(1));
  }, [dispatch]);

  return (
    <div className={styles.boxTeam}>
      <Filter />
      {paginatedPosts.length > 0 && <ListPlayers list={paginatedPosts} />}

      <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        breakLabel={"..."}
        pageCount={Math.ceil(posts.length / ITEMS_PER_PAGE)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={styles.pagination}
        activeClassName={styles.active}
      />
    </div>
  );
};
export default TeamList;
