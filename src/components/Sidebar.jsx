import { Link } from "react-router";

function Sidebar({ genres, activeGenre, counts }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-title">解决方案中心</div>

      <nav className="sidebar-nav">
        <Link
          to="/"
          className={
            activeGenre === null ? "sidebar-link-active" : "sidebar-link"
          }
        >
          产品矩阵
        </Link>

        <div className="sidebar-section">
          <div className="sidebar-heading">Genres</div>
          {genres.map((genre) => (
            <Link
              key={genre.name}
              to={`/genre/${encodeURIComponent(genre.name)}`}
              className={
                activeGenre === genre.name
                  ? "sidebar-link-active"
                  : "sidebar-link"
              }
            >
              {genre.name}
              {counts && (
                <span className="ml-2 text-xs text-gray-900">
                  ({genre.count})
                </span>
              )}
            </Link>
          ))}
        </div>
      </nav>


    </aside>
  );
}

export default Sidebar;
