export const userMapper = User => ({
    name: User.name,
    nickname: User.nickname,
    email: User.email,
    avatar: User.avatar,
});

export const projectMapper = Project => ({
    id: Project.id,
    name: Project.name,
    description: Project.description,
    createdAt: Project.createdAt,
    updatedAt: Project.updatedAt,
    dashboardOrder: Project.dashboardOrder
});