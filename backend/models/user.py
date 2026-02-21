from datetime import datetime

from sqlalchemy import Column, DateTime, Float, Integer, String
from sqlalchemy.orm import relationship

from db.database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(String, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    password_hash = Column(String, nullable=False)
    skill_level = Column(String, nullable=True)
    engagement_score = Column(Float, default=0.0, nullable=False)
    global_elo_rating = Column(Float, default=1000.0, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)

    user_skills = relationship("UserSkill", back_populates="user", cascade="all, delete-orphan")
    events = relationship("Event", back_populates="user", cascade="all, delete-orphan")
