package com.vedang.classroom.repository;

import com.vedang.classroom.model.BookmarkedFile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookmarkedFileRepo extends JpaRepository<BookmarkedFile, Integer> {
}
